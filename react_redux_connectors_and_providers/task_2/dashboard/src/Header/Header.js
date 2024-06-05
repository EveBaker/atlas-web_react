import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { connect } from 'react-redux';
import { logOut } from '../actions/uiActionCreators';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
header: {
  display:'flex',
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
});

function Header() {
  return (
    <div className={css(styles.header)}>
    <img src={logo} alt="Holberton School logo" className={css(styles.img)} />
    <h1 className={css(styles.h1)}>School dashboard</h1>
    {user && (
      <div className={css(styles.logoutSection)}>
        <span>{`Welcome, ${user.email}`}</span>
        <span className={css(styles.logoutLink)} onClick={logOut}>
          (logout)
        </span>
      </div>
    )}
  </div>
);
}

Header.propTypes = {
  user: PropTypes.object,
  logOut: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};

const mapStateToProps = (state) => ({
  user: state.get('user'),
});

const mapDispatchToProps = {
  logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);