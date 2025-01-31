import React from 'react';
import { Amplify } from 'aws-amplify';
import awsExports from '../../pages/aws-exports';
Amplify.configure(awsExports);

import { FaCalendar, FaSearch, FaStar, FaSignOutAlt } from 'react-icons/fa';
import { FaPen } from "react-icons/fa6";

import './Footer.css';

interface FooterProps {
  signOut: () => void;
  onSelectPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ signOut, onSelectPage }) => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <button className="footer-button" onClick={() => onSelectPage('pen')}>
          <FaPen />
        </button>
        <button className="footer-button" onClick={() => onSelectPage('calendar')}>
          <FaCalendar />
        </button>
        <button className="footer-button" onClick={() => onSelectPage('search')}>
          <FaSearch />
        </button>
        <button className="footer-button" onClick={() => onSelectPage('star')}>
          <FaStar />
        </button>
        <button onClick={() => signOut && signOut()} className="footer-button">
          <FaSignOutAlt />
        </button>
      </div>
    </footer>
  );
};

export default Footer;