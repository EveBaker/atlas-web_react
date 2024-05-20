import React, { Component, Fragment } from 'react';
import { StyleSheet, css } from 'aphrodite'; 
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import AppContext, {user} from './AppContext';

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
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user,
      listNotifications: [
        { id: 1, type: 'default', value: "New course available" },
        { id: 2, type: 'urgent', value: "New resume available" },
        { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } }
      ],
    };
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(event) {
    if (event.ctrlKey && event.key === 'h') {
      event.preventDefault();
      alert('Logging you out');
      this.logOut();
    }
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  logIn(email, password) {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      },
    });
  }

  logOut = () => {
    this.setState({
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
    });
  };

  markNotificationAsRead(id) {
    this.setState((prevState) => ({
      listNotifications: prevState.listNotifications.filter(notification => notification.id !== id),
    }));
  }

  render() {
    const { displayDrawer, user, listNotifications } = this.state;
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];

    return (
      <AppContext.Provider value={{ user, logOut: this.logOut }}>
        <Fragment>
          <div className={css(styles.app)}>
            <div className={css(styles.Header)}>
              <Notifications 
                listNotifications={listNotifications} 
                displayDrawer={displayDrawer}
                handleDisplayDrawer={this.handleDisplayDrawer}
                handleHideDrawer={this.handleHideDrawer}
                markNotificationAsRead={this.markNotificationAsRead}  // Pass this function as a prop
              />
              <Header />
            </div>
            {user.isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login logIn={this.logIn} />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the School">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.</p>
            </BodySection>
            <div className={css(styles.footer)}>
            </div>
            <Footer />
          </div>
        </Fragment>
      </AppContext.Provider>
    );
  }
}

export default App;
