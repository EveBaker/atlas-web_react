import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

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
});
