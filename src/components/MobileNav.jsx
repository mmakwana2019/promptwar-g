import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Calendar, Map, QrCode, Users } from 'lucide-react';
import './MobileNav.css';

const MobileNav = () => {
  const navItems = [
    { name: 'Home', icon: Home, path: '/' },
    { name: 'Agenda', icon: Calendar, path: '/agenda' },
    { name: 'Scan', icon: QrCode, path: '/checkin', special: true },
    { name: 'Map', icon: Map, path: '/map' },
    { name: 'Networking', icon: Users, path: '/network' },
  ];

  return (
    <nav className="mobile-nav">
      <ul className="nav-list">
        {navItems.map((item) => (
          <li key={item.name} className="nav-item">
            <NavLink 
              to={item.path} 
              className={({ isActive }) => 
                `nav-link ${isActive ? 'active' : ''} ${item.special ? 'special-action' : ''}`
              }
            >
              <div className="icon-wrapper">
                <item.icon size={item.special ? 28 : 24} strokeWidth={item.special ? 2.5 : 2} />
              </div>
              <span className="nav-label">{item.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNav;
