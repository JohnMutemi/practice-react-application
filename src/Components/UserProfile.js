import React from 'react';

function UserProfile({ user, onLogout }) {
  return (
    <div className="user-profile">
      <div className="avatar">
        <img src={user.avatarUrl} alt="User Avatar" />
      </div>
      <div className="info">
        <h3>{user.username}</h3>
        <p>{user.email}</p>
      </div>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default UserProfile;
