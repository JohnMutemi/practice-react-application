import React, { useState } from 'react';

function Registration() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    subscribeToUpdates: false,
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === 'subscribeToUpdates' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send formData to backend server to create new user account
    // Handle user registration logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="registration-form">
      <h2>Create Your Account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <label>
          <input
            type="checkbox"
            name="subscribeToUpdates"
            checked={formData.subscribeToUpdates}
            onChange={handleChange}
          />
          Subscribe to weekly football updates
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Registration;
