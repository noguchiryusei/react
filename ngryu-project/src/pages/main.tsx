import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from '../components/Footer/Footer';
import Calendar from '../components/Calendar/Calendar.js';
import { Events } from '../components/Calendar/Events.js';
import './index.css';
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports.js'; // パスは正確に

Amplify.configure(awsExports);
const events: Events = {
5: "イベントA",
15: "イベントB"
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     <Authenticator hideSignUp={true}>
      {({ signOut }) => (
        <div className="app">
          <h2>へっだー</h2>
          <Calendar month={new Date().getMonth()} year={new Date().getFullYear()} events={events} />
          <Footer signOut={signOut ?? (() => {})} /> 
        </div>
      )}
    </Authenticator>
  </React.StrictMode>
);