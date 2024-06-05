import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';

function Footer() {
  const isIndex = true;
  return (
    <div className="Footer">
      <p>Copyright {getFullYear()} - {getFooterCopy(isIndex)}</p>
      {user && user.email && (
        <p>{`Logged in as: ${user.email}`}</p>
      )}
    </div>
  );
}

Footer.propTypes = {
  user: PropTypes.object,
};

Footer.defaultProps = {
  user: null,
};

const mapStateToProps = (state) => ({
  user: state.get('user'),
});

export default connect(mapStateToProps)(Footer);