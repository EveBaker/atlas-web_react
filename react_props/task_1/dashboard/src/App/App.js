import React, { Fragment } from 'react';
import './App.css';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';
import Notifications from '../Notifications/Notifications.js';


function App() {
  return (
    <div className="App">
        <Notifications />
      <Header />
      <Login />
      <Footer />
    </div>
  );
}

export default App;