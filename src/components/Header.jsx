import React from 'react';
import { Bell } from 'lucide-react';
import { currentUser } from '../data/sampleData';
import './Header.css';

const Header = ({ title }) => {
  return (
    <header className="app-header">
      <div className="header-content">
        <h1 className="header-title">{title || "Lumiere Events"}</h1>
        <div className="header-actions">
          <button className="icon-btn relative">
            <Bell size={24} />
            <span className="notification-dot"></span>
          </button>
          <div className="avatar">
            <img src={currentUser.avatarUrl} alt={currentUser.name} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
