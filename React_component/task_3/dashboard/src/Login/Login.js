import React from 'react';
import './Login.css';

function Login() {
  const handleLabelClick = (id) => {
    const inputElement = document.getElementById(id);
    if (inputElement) {
      inputElement.focus();
    }
  };

  return (
    <div className="Login-body">
      <p>Login to access the full dashboard</p>
      <div>
        <label htmlFor="email" onClick={() => handleLabelClick('email')}>Email:</label>
        <input type="email" id="email" />
        <label htmlFor="password" onClick={() => handleLabelClick("password")}>Password:</label>
        <input type="password" id="password"/>
        <button type="button">OK</button>
      </div>
    </div>
  );
}

export default Login;
