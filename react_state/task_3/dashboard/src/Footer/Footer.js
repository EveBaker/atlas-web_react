import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';
import AppContext from '../App/AppContext';

function Footer() {
  const isIndex = true;

  return (
    <AppContext.Consumer>
      {({ user }) => (
        <div className={css(styles.footer)}>
          <p>
            Copyright {getFullYear()} - {getFooterCopy(isIndex)}
          </p>
          {user.isLoggedIn && (
            <p>
              <a href="/contact">Contact us</a>
            </p>
          )}
        </div>
      )}
    </AppContext.Consumer>
  );
}

const styles = StyleSheet.create({
  footer: {
    bottom: 0,
    width: '100%',
    textAlign: 'center',
    borderTop: '3px solid #e1354b',
    padding: '16px 0',
    fontSize: '30px',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});

export default Footer;
