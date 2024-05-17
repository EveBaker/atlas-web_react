import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  loginBody: {
    margin: '60px 0 0 32px',
  },
  p: {
    fontSize: '25px',
  },
  input: {
    fontWeight: 'bold',
  },
  inputs: {
    fontWeight: 'bold',
    display: 'inline-block',
    fontSize: '20px',
  },
});

function Login() {
  const handleLabelClick = (id) => {
    const inputElement = document.getElementById(id);
    if (inputElement) {
      inputElement.focus();
    }
  };

  return (
    <div className={css(styles.loginBody)}>
      <p className={css(styles.p)}>Login to access the full dashboard</p>
      <div>
        <label htmlFor="email" onClick={() => handleLabelClick('email')}>Email:</label>
        <input type="email" id="email" className={css(styles.input)} />
        <label htmlFor="password" onClick={() => handleLabelClick('password')}>Password:</label>
        <input type="password" id="password" className={css(styles.input)} />
        <button type="button" className={css(styles.inputs)}>OK</button>
      </div>
    </div>
  );
}
export default Login;
