import React from 'react';
import ReactDOM from 'react-dom/client';
import Footer from '../components/Footer/Footer';
import './index.css';
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports.js'; // パスは正確に
import { signOut } from "aws-amplify/auth"
Amplify.configure(awsExports);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     <Authenticator hideSignUp={true}>
      {({ signOut }) => (
        <div className="app">
          <h2>へっだー</h2>
          {<Footer signOut={signOut} />} 
        </div>
      )}
    </Authenticator>
  </React.StrictMode>
);