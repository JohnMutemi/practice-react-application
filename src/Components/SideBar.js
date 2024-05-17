import React, {useState} from 'react';
import Logo from './Logo';
import NavBar from './NavBar';
import UserProfile from './UserProfile';
import Settings from './Settings';
import AdditionalWidgets from './AdditionalWidgets';

function Sidebar() {
  const [user, setUser] = useState({
    username: 'John Doe',
    email: 'john@example.com',
    avatarUrl: '/path/to/avatar.png', // Replace with the actual path to the user's avatar
  });

  const handleLogout = () => {
    // Perform logout actions, such as clearing user data from local storage or state
    setUser(null);
    // Redirect the user to the login page or perform any other desired action
  };
  return (
    <div className="sidebar">
      <Logo />
      <NavBar />
      <UserProfile user={user} onLogout={handleLogout} />
      <Settings />
      <AdditionalWidgets />
    </div>
  );
}

export default Sidebar;
