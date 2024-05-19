import React, { Component } from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import AppContext from '../App/AppContext';

  const styles = StyleSheet.create({
    header: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'left',
      borderBottom: '3px solid #e1354b',
    },
    h1: {
      margin: 'auto auto auto 0',
      color: '#e1354b',
      fontSize: '70',
      fontWeight: 'bold',
    },
    img: {
      height: '400px',
    },
    logoutSection: {
      marginLeft: 'auto',
      display: 'flex',
      alignItems: 'center',
    },
    welcomeText: {
      marginRight: '10px',
    },
    logoutLink: {
      cursor: 'pointer',
      color: '#e1354b',
      textDecoration: 'underline',
    },
  });
  

  class Header extends Component {
    static contextType = AppContext;
  
    render() {
      const { user, logOut } = this.context;
  
      return (
        <div className={css(styles.header)}>
          <img src={logo} alt="Holberton School logo" className={css(styles.img)} />
          <h1 className={css(styles.h1)}>School dashboard</h1>
          {user.isLoggedIn && (
            <div id="logoutSection" className={css(styles.logoutSection)}>
              <p className={css(styles.welcomeText)}>
                Welcome {user.email}
              </p>
              <a href="#" onClick={logOut} className={css(styles.logoutLink)}>
                (logout)
              </a>
            </div>
          )}
        </div>
      );
    }
  }

export default Header;