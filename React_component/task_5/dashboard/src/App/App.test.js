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

  it('renders CourseList when isLoggedIn is true', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find(CourseList).exists()).toBeTruthy();
    expect(wrapper.find(Login).exists()).toBeFalsy();
  });

  it('calls logOut and alerts when Control + H is pressed', () => {
    const logOutMock = jest.fn();
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
    const wrapper = shallow(<App logOut={logOutMock} />);
    const instance = wrapper.instance();
    const event = new KeyboardEvent('keydown', { key: 'h', ctrlKey: true });
    
  
    instance.handleKeyDown(event);
    
    expect(logOutMock).toHaveBeenCalled();
    expect(alertMock).toHaveBeenCalledWith('Logging you out');

    alertMock.mockRestore();
});
});