// import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
// import Footer from '../components/Footer/Footer';
// import Calendar from '../components/Calendar/Calendar';
// import { Events } from '../components/Calendar/Events';

// import './index.css';
// import "@aws-amplify/ui-react/styles.css";
// import {
//   withAuthenticator,
//   Button,
//   Heading,
//   Image,
//   View,
//   Card,
// } from "@aws-amplify/ui-react";

// import { Authenticator } from '@aws-amplify/ui-react';
// import { Amplify } from 'aws-amplify';
// import awsExports from './aws-exports.js';
import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import {
  Button,
  Flex,
  Heading,
  Text,
  TextField,
  View,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import { listNotes } from "../graphql/queries.js";
import {
  createNote as createNoteMutation,
  deleteNote as deleteNoteMutation,
} from "../graphql/mutations.js";
import { generateClient } from 'aws-amplify/api';

const client = generateClient();


// Amplify.configure(awsExports);

// const events: Events = {
//   5: "イベントA",
//   15: "イベントB"
// };

interface MainProps {
  signOut?: (data?: any) => void;
  event?: (data?: any) => void;
}


const Main: React.FC<MainProps> = ({ signOut, event }) => {
  const [currentPage, setCurrentPage] = useState('home');

  // const renderPage = () => {
  //   switch (currentPage) {
  //     case 'calendar':
  //       return <Calendar month={new Date().getMonth()} year={new Date().getFullYear()} events={events} />;
  //     case 'star':
  //       return <div>star</div>;
  //     case 'search':
  //       return <div>search</div>;
  //     case 'user':
  //       return <div>user</div>;
  //     default:
  //       return <Calendar month={new Date().getMonth()} year={new Date().getFullYear()} events={events} />;
  //   }
  // };
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const apiData = await client.graphql({ query: listNotes });
    const notesFromAPI = apiData.data.listNotes.items;
    setNotes(notesFromAPI);
  }

  async function createNote(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = {
      name: form.get("name"),
      description: form.get("description"),
    };
    await client.graphql({
      query: createNoteMutation,
      variables: { input: data },
    });
    fetchNotes();
    event.target.reset();
  }

  async function deleteNote({ id }) {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    await client.graphql({
      query: deleteNoteMutation,
      variables: { input: { id } },
    });
  }
  return (
    <View className="App">
      <Heading level={1}>My Notes App</Heading>
      <View as="form" margin="3rem 0" onSubmit={createNote}>
        <Flex direction="row" justifyContent="center">
          <TextField
            name="name"
            placeholder="Note Name"
            label="Note Name"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="description"
            placeholder="Note Description"
            label="Note Description"
            labelHidden
            variation="quiet"
            required
          />
          <Button type="submit" variation="primary">
            Create Note
          </Button>
        </Flex>
      </View>
      <Heading level={2}>Current Notes</Heading>
      <View margin="3rem 0">
        {notes.map((note) => (
          <Flex
            key={note.id || note.name}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Text as="strong" fontWeight={700}>
              {note.name}
            </Text>
            <Text as="span">{note.description}</Text>
            <Button variation="link" onClick={() => deleteNote(note)}>
              Delete note
            </Button>
          </Flex>
        ))}
      </View>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
    // <div className="app">
    //   <h2>へっだー</h2>
    //   {renderPage()}
    //   <Footer signOut={signOut ?? (() => {})} onSelectPage={setCurrentPage} />
    // </div>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {
      <Main />
    /* <Authenticator hideSignUp={true}>
      {({ signOut }) => (
        <Main signOut={signOut} />
      )}
    </Authenticator> */}
  </React.StrictMode>
);