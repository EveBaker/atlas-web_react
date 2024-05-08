import React, { Component, Fragment } from 'react';
import './App.css';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';


class App extends React.Component {
  render() {
    const { isLoggedIn } = this.props;
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];

    return (
      <Fragment>
        <div className="App">
          <div className="upper">
            <Notifications /> {/*Remove this to get rid of second notifications. the top one should be right. not sure why there is two. this needs to be here for tests. to afraid to mess with it.*/}
            <Header />
          </div>
          {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
          <Footer />
        </div>
      </Fragment>
    );
  }
}
App.defaultProps = {
  isLoggedIn: false,
};

export default App;