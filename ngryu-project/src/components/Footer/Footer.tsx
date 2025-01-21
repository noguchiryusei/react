import React from 'react';
import { Amplify } from 'aws-amplify';
import awsExports from '../../aws-exports.js'; // AWS Amplifyの設定ファイル
Amplify.configure(awsExports);

import { Authenticator } from '@aws-amplify/ui-react';

const Footer: React.FC = () => {
  return (
    <>
      <Authenticator hideSignUp={true}> 
        {({ signOut, user }) => (
          <div>
            <div>
              <button onClick={signOut}>Sign out</button>
            </div>
            <div>
              {user ? `Logged in as: ${user.username}` : 'Loading...'} 
            </div>
          </div>
        )}
      </Authenticator>
    </>
  );
};

export default Footer;