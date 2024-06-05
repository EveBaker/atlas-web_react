import React from 'react';
import { fromJS } from 'immutable';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App, { mapStateToProps } from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore([]);

describe('App', () => {
  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore({
      isUserLoggedIn: false,
      isNotificationDrawerVisible: false,
    });

    wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  it('contains the Notifications component', () => {
    expect(wrapper.find(Notifications).exists()).toBeTruthy();
  });

  it('contains the Header component', () => {
    expect(wrapper.find(Header).exists()).toBeTruthy();
  });

  it('contains the Login component', () => {
    expect(wrapper.find(Login).exists()).toBeTruthy();
  });

  it('contains the Footer component', () => {
    expect(wrapper.find(Footer).exists()).toBeTruthy();
  });

  it('renders Login by default', () => {
    expect(wrapper.find(Login).exists()).toBeTruthy();
    expect(wrapper.find(CourseList).exists()).toBeFalsy();
  });

  it('renders CourseList when isLoggedIn is true', () => {
    store = mockStore({
      isUserLoggedIn: true,
      isNotificationDrawerVisible: false,
    });

    wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(wrapper.find(CourseList).exists()).toBeTruthy();
    expect(wrapper.find(Login).exists()).toBeFalsy();
  });

  it('calls logOut and alerts when Control + H is pressed', () => {
    const logOutMock = jest.fn();
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    wrapper = mount(
      <Provider store={store}>
        <App logOut={logOutMock} />
      </Provider>
    );

    const event = new KeyboardEvent('keydown', { key: 'h', ctrlKey: true });
    window.dispatchEvent(event);

    expect(logOutMock).toHaveBeenCalled();
    expect(alertMock).toHaveBeenCalledWith('Logging you out');

    alertMock.mockRestore();
  });

  it('shows the drawer when displayNotificationDrawer is called', () => {
    store = mockStore({
      isUserLoggedIn: false,
      isNotificationDrawerVisible: false,
    });

    wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );

    wrapper.find('Notifications').props().handleDisplayDrawer();
    expect(wrapper.find('Notifications').props().displayDrawer).toBe(true);
  });

  it('hides the drawer when hideNotificationDrawer is called', () => {
    store = mockStore({
      isUserLoggedIn: false,
      isNotificationDrawerVisible: true,
    });

    wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );

    wrapper.find('Notifications').props().handleHideDrawer();
    expect(wrapper.find('Notifications').props().displayDrawer).toBe(false);
  });
});

describe('mapStateToProps', () => {
  it('should return the correct state', () => {
    const state = fromJS({
      isUserLoggedIn: true,
      isNotificationDrawerVisible: true,
    });
    const expectedProps = {
      isLoggedIn: true,
      displayDrawer: true,
    };
    expect(mapStateToProps(state)).toEqual(expectedProps);
  });
});
