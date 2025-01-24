import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Footer from '../components/Footer/Footer';
import Calendar from '../components/Calendar/Calendar';
import { Events } from '../components/Calendar/Events';
import './index.css';
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports.js';

Amplify.configure(awsExports);

const events: Events = {
  5: "イベントA",
  15: "イベントB"
};

interface MainProps {
  signOut?: (data?: any) => void;
}


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
      case 'user':
        return <div>user</div>;
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