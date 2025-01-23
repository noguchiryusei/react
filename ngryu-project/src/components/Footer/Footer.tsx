import React from 'react';
import { Amplify } from 'aws-amplify';
import awsExports from '../../pages/aws-exports.js';
Amplify.configure(awsExports);

//import { Authenticator } from '@aws-amplify/ui-react';
import { FaCalendar, FaSearch, FaStar, FaUser, FaSignOutAlt } from 'react-icons/fa';

import './Footer.css'; // CSSファイルをインポート

interface FooterProps {
  signOut: () => void; // 基本的な関数型
}

const Footer: React.FC<FooterProps> = ({ signOut }) => {
  return (
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
        <button onClick={() => signOut && signOut()} className="footer-button">
          <FaSignOutAlt />
        </button>
      </div>
    </footer>
  );
};
// const Footer: React.FC = () => {
//   return (
//     <Authenticator hideSignUp={true}> 
//       {({ signOut }) => (
//         <footer className="footer">
//           <div className="footer-icons">
//             <button className="footer-button">
//               <FaCalendar />
//             </button>
//             <button className="footer-button">
//               <FaSearch />
//             </button>
//             <button className="footer-button">
//               <FaStar />
//             </button>
//             <button className="footer-button">
//               <FaUser />
//             </button>
//             <button onClick={signOut} className="footer-button">
//               <FaSignOutAlt />
//             </button>
//           </div>
//         </footer>
//       )}
//     </Authenticator>
//   );
// };



export default Footer;