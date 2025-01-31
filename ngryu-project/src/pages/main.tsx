import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Footer from '../components/Footer/Footer';
import Calendar from '../components/Calendar/Calendar';
import { Events } from '../components/Calendar/Events';
import './index.css';
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports.js';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsExports);
// import config from '../amplifyconfiguration.json';
// Amplify.configure(config);
// Amplify.configure({
//   API: {
//     GraphQL: {
//       endpoint: 'https://wmmhx2buafatff3d7i53b7flym.appsync-api.ap-northeast-1.amazonaws.com/graphql',
//       region: 'ap-northeast-1',
//       defaultAuthMode: 'apiKey',
//       apiKey: 'Sda2-mmmqz6gbzfe4fjxrxf44ujapdi'
//     }
//   }
// });

import { generateClient } from 'aws-amplify/api';
import { createBlog, updateBlog, deleteBlog } from '../graphql/mutations';
import { listBlogs } from '../graphql/queries';

const client = generateClient();

const events: Events = {
  5: "イベントA",
  15: "イベントB"
};

interface MainProps {
  signOut?: (data?: any) => void;
}

async function createNewBlog() {
  try {
    const todo = {
      name: "value1",
    };
    
    const newTodo = await client.graphql({
      query: createBlog,
      variables: { input: todo }
    });
    
    console.log('New Todo:', newTodo);
  } catch (error) {
    console.error('Error creating new todo:', error);
  }
}
createNewBlog()

Amplify.configure(awsExports);

const Main: React.FC<MainProps> = ({ signOut }) => {
  const [currentPage, setCurrentPage] = useState('home');
  
  const renderPage = () => {
    switch (currentPage) {
      case 'calendar':
        return <Calendar month={new Date().getMonth()} year={new Date().getFullYear()} events={events} />;
        case 'star':
          return <div>star</div>;
      case 'search':
        return <div>search</div>;
      case 'pen':
        return <div>pen</div>;
      default:
        return <Calendar month={new Date().getMonth()} year={new Date().getFullYear()} events={events} />;
    }
  };

  return (
    <div className="app">
      <h2>へっだー</h2>
      {renderPage()}
      <Footer signOut={signOut ?? (() => {})} onSelectPage={setCurrentPage} />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Authenticator hideSignUp={true}>
      {({ signOut }) => (
        <Main signOut={signOut} />
      )}
    </Authenticator>
  </React.StrictMode>
);