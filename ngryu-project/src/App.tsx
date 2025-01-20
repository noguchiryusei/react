import React from 'react';
import './App.css';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports.js'; // AWS Amplifyの設定ファイル
Amplify.configure(awsExports);

import { Authenticator } from '@aws-amplify/ui-react';

const App: React.FC = () => {
  return (
    <div className="container">
      Welcome to the app!
    </div>
  );
};

const AppWithAuth: React.FC = () => (
  <Authenticator hideSignUp={true}> 
    {({ signOut, user }) => (
      <div>
        <App />
        <div style={{ marginTop: '20px' }}>
          <button onClick={signOut}>Sign out</button> {/* Sign outボタンの設置 */}
        </div>
        <div>
          Logged in as: {user.username} {/* 現在のユーザー名を表示 */}
        </div>
      </div>
    )}
  </Authenticator>
);

export default AppWithAuth;