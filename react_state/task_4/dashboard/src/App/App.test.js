import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('contains the Notifications component', () => {
    const notificationsComponent = wrapper.find(Notifications);
    expect(notificationsComponent.exists()).toBeTruthy();
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

  it('renders CourseList when user is logged in', () => {
    wrapper.setState({ user: { isLoggedIn: true } });
    expect(wrapper.find(CourseList).exists()).toBeTruthy();
    expect(wrapper.find(Login).exists()).toBeFalsy();
  });

  it('calls logOut and alerts when Control + H is pressed', () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    wrapper.instance().logOut = jest.fn();
    wrapper.instance().forceUpdate();

    const event = new KeyboardEvent('keydown', { key: 'h', ctrlKey: true });
    window.dispatchEvent(event);

    expect(wrapper.instance().logOut).toHaveBeenCalled();
    expect(alertMock).toHaveBeenCalledWith('Logging you out');

    alertMock.mockRestore();
  });

  it('has a default state for displayDrawer set to be false', () => {
    expect(wrapper.state('displayDrawer')).toBe(false);
  });

  it('changes displayDrawer state to true when handleDisplayDrawer is called', () => {
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state('displayDrawer')).toBe(true);
  });

  it('changes displayDrawer state to false when handleHideDrawer is called', () => {
    wrapper.instance().handleDisplayDrawer(); // true
    wrapper.instance().handleHideDrawer(); // false
    expect(wrapper.state('displayDrawer')).toBe(false);
  });

  it('updates state correctly when logIn function is called', () => {
    const email = 'test@example.com';
    const password = 'password';
    wrapper.instance().logIn(email, password);
    expect(wrapper.state('user')).toEqual({
      email,
      password,
      isLoggedIn: true,
    });
  });

  it('updates state correctly when logOut function is called', () => {
    wrapper.setState({
      user: {
        email: 'test@example.com',
        password: 'password',
        isLoggedIn: true,
      },
    });
    wrapper.instance().logOut();
    expect(wrapper.state('user')).toEqual({
      email: '',
      password: '',
      isLoggedIn: false,
    });
  });

  it('marks notifications as read correctly', () => { 
    const initialNotifications = [
      { id: 1, type: 'default', value: "New course available" },
      { id: 2, type: 'urgent', value: "New resume available" },
      { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } }
    ];
    wrapper.setState({ listNotifications: initialNotifications });
    wrapper.instance().markNotificationAsRead(2);
    expect(wrapper.state('listNotifications')).toEqual([
      { id: 1, type: 'default', value: "New course available" },
      { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } }
    ]);
  });
});
