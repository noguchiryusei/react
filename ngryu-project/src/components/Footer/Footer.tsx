import React from 'react';
import { Amplify } from 'aws-amplify';
import awsExports from '../../pages/aws-exports.js';
Amplify.configure(awsExports);

import { Authenticator } from '@aws-amplify/ui-react';
import { FaCalendar, FaSearch, FaStar, FaUser } from 'react-icons/fa';

import './Footer.css'; // CSSファイルをインポート

const Footer: React.FC = () => {
  return (
    <Authenticator hideSignUp={true}> 
      {({ signOut, user }) => (
        <footer className="footer">
          <div className="footer-icons">
            <button className="footer-button">
              <FaCalendar />
            </button>
            <button className="footer-button">
              <FaSearch />
            </button>
            <button className="footer-button">
              <FaStar />
            </button>
            <button className="footer-button">
              <FaUser />
            </button>
          </div>
          <div className="footer-auth">
            <button onClick={signOut} className="signout-button">Sign out</button>
            {user ? <span>Logged in as: {user.username}</span> : 'Loading...'}
          </div>
        </footer>
      )}
    </Authenticator>
  );
};

export default Footer;