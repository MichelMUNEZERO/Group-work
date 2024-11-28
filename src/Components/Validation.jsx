import React, { useState } from 'react';

function Validation() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError('Please fill out both fields.');
    } else if (!email.includes('@')) {
      setError('Please enter a valid email.');
    } else if (password.length < 6) {
      setError('Password must be at least 6 characters.');
    } else {
      setError('');
      console.log('Form submitted:', { email, password });
    }
  };

  return (
    <div>
      <h1>Login Form</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </div>

        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Validation;