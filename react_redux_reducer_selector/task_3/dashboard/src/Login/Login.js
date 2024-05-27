import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  loginBody: {
    margin: '60px 0 0 32px',
  },
  p: {
    fontSize: '25px',
  },
  inputGroup: {
    marginBottom: '9px',
  },
  label: {
    display: 'block',
    fontWeight: 'bold',
    marginBottom: '5px',
  },
  input: {
    display: 'block',
    marginBottom: '9px',
    fontSize: '10px',
    padding: '8px',
    width: '40%',
    boxSizing: 'border-box',
  },
  button: {
    display: 'block',
    fontSize: '10px',
    padding: '10px 10px',
    cursor: 'pointer',
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
      <div className={css(styles.inputGroup)}>
        <label htmlFor="email" className={css(styles.label)} onClick={() => handleLabelClick('email')}>Email:</label>
        <input type="email" id="email" className={css(styles.input)} />
        </div>
        <div className={css(styles.inputGroup)}>
        <label htmlFor="password" className={css(styles.label)} onClick={() => handleLabelClick('password')}>Password:</label>
        <input type="password" id="password" className={css(styles.input)} />
      </div>
      <button type="button" className={css(styles.button)}>OK</button>
    </div>
  );
}

export default Login;
