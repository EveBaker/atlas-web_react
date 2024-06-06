import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../actions/uiActionCreators';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';

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
});

function Header({ user, logout }) {
  return (
    <div className={css(styles.header)}>
      <img src={logo} alt="Holberton School logo" className={css(styles.img)} />
      <h1 className={css(styles.h1)}>School dashboard</h1>
      {user && (
        <div>
          Welcome, {user.email} <button onClick={logout}>Logout</button>
        </div>
      )}
    </div>
  );
}

Header.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }),
  logout: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { logout })(Header);
