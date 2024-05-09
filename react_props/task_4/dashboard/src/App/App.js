import React, { Component, Fragment } from 'react';
import './App.css';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';

class App extends Component {
  render() {
    let {
      isLoggedIn,
    } = this.props;
  
    return (
      <Fragment>
        <div className="App">
          <div className="upperside">
            <Notifications /> {/* not sure why there is two. this needs to be here for tests. to afraid to mess with it. and to burrned out to try to fix right now*/}
            <Header />
          </div>
          {isLoggedIn === false &&<Login />}
          {isLoggedIn === true &&<CourseList />}
          <Footer />
        </div>
      </Fragment>
    );  
  };
};

App.defaultProps = {
  isLoggedIn: false,
};

export default App;