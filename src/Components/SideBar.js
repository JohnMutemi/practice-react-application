import React from 'react';
import Logo from './Logo';
import NavBar from './NavBar';
import UserProfile from './UserProfile';
import Settings from './Settings';
import AdditionalWidgets from './AdditionalWidgets';

function Sidebar() {
  return (
    <div className="sidebar">
      <Logo />
      <NavBar />
      <UserProfile />
      <Settings />
      <AdditionalWidgets />
    </div>
  );
}

export default Sidebar;
