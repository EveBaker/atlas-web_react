import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      enableSubmit: false,
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.updateSubmitButtonState = this.updateSubmitButtonState.bind(this);
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.logIn(email, password);
  }

  handleChangeEmail(event) {
    this.setState({ email: event.target.value }, this.updateSubmitButtonState);
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value }, this.updateSubmitButtonState);
  }

  updateSubmitButtonState() {
    const { email, password } = this.state;
    this.setState({ enableSubmit: email !== '' && password !== '' });
  }

  render() {
    const { email, password, enableSubmit } = this.state;

    return (
      <div className={css(styles.loginBody)}>
        <p className={css(styles.p)}>Login to access the full dashboard</p>
        <form onSubmit={this.handleLoginSubmit}>
          <div className={css(styles.inputGroup)}>
            <label htmlFor="email" className={css(styles.label)}>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className={css(styles.input)}
              value={email}
              onChange={this.handleChangeEmail}
            />
          </div>
          <div className={css(styles.inputGroup)}>
            <label htmlFor="password" className={css(styles.label)}>Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              className={css(styles.input)}
              value={password}
              onChange={this.handleChangePassword}
            />
          </div>
          <input
            type="submit"
            className={css(styles.button)}
            value="Submit"
            disabled={!enableSubmit}
          />
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  logIn: PropTypes.func.isRequired,
};

export default Login;
