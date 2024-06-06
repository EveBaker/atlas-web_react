import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';

function Footer({ user }) {
  const isIndex = true;
  return (
    <div className="Footer">
      <p>Copyright {getFullYear()} - {getFooterCopy(isIndex)}</p>
      {user && (
        <p>
          Logged in as: {user.email}
        </p>
      )}
    </div>
  );
}

Footer.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }),
};

Footer.defaultProps = {
  user: null,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Footer);
