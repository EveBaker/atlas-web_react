import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { displayNotificationDrawer, hideNotificationDrawer, loginRequest, logOut } from '../actions/uiActionCreators';

const styles = StyleSheet.create({
  app: {
    position: 'relative',
    minHeight: '100vh',
  },
  Header: {
    display: "flex",
    flexDirection: "row-reverse",
    width: "100%",
    borderBottom: `3px solid #e1354b`,
    justifyContent: "space-between",
  },
  footer: {
    backgroundColor: '#fff',
    textAlign: 'center',
    width: '100%',
    bottom: '0px',
    borderTop: '3px solid #e1354b',
    fontStyle: 'italic',
    padding: '1rem 0'
  }
});

class App extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      event.preventDefault();
      alert('Logging you out');
      this.props.logOut();
    }
  };

  render() {
    const { isLoggedIn, displayDrawer, displayNotificationDrawer, hideNotificationDrawer, loginRequest } = this.props;
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];

    const listNotifications = [
      { id: 1, type: 'default', value: "New course available" },
      { id: 2, type: 'urgent', value: "New resume available" },
      { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } }
    ];

    return (
      <Fragment>
        <div className={css(styles.app)}>
          <div className={css(styles.Header)}>
            <Notifications
              listNotifications={listNotifications}
              displayDrawer={displayDrawer}
              handleDisplayDrawer={displayNotificationDrawer}
              handleHideDrawer={hideNotificationDrawer}
            />
            <Header />
          </div>
          {isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login login={loginRequest} />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the School">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</p>
          </BodySection>
          <div className={css(styles.footer)}></div>
          <Footer />
        </div>
      </Fragment>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  logOut: PropTypes.func,
  displayNotificationDrawer: PropTypes.func.isRequired,
  hideNotificationDrawer: PropTypes.func.isRequired,
  loginRequest: PropTypes.func.isRequired,
};

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
  logOut: () => {},
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.get('isUserLoggedIn'),
  displayDrawer: state.get('isNotificationDrawerVisible'),
});

const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginRequest,
  logOut,
};

export { mapStateToProps };
export default connect(mapStateToProps, mapDispatchToProps)(App);
