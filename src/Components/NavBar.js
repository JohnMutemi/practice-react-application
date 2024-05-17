import React from 'react';

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Teams</a>
        </li>
        {/* Add more navigation links as needed */}
      </ul>
    </div>
  );
}

export default Navbar;
