import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import Header from './Header';
import AppContext, { user, logOut } from '../App/AppContext';

Enzyme.configure({ adapter: new Adapter() });

describe('Header', () => {
  let consoleErrorSpy;

  beforeAll(() => {
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation((message) => {
      if (message.includes('findDOMNode is deprecated')) {
        return;
      }
      console.error(message);
    });
  });

  afterAll(() => {
    consoleErrorSpy.mockRestore();
  });

  it('renders without crashing', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.exists()).toBeTruthy();
  });

  it('renders img and h1 tags', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('img').length).toEqual(1);
    expect(wrapper.find('h1').length).toEqual(1);
  });

  it('does not create logoutSection with default context value', () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection').exists()).toBe(false);
  });

  it('creates logoutSection when user is logged in', () => {
    const loggedInUser = { ...user, email: 'user@example.com', isLoggedIn: true };
    const wrapper = mount(
      <AppContext.Provider value={{ user: loggedInUser, logOut }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection').exists()).toBe(true);
  });

  it('calls logOut function when logout link is clicked', () => {
    const loggedInUser = { ...user, email: 'user@example.com', isLoggedIn: true };
    const logOutSpy = jest.fn();
    const wrapper = mount(
      <AppContext.Provider value={{ user: loggedInUser, logOut: logOutSpy }}>
        <Header />
      </AppContext.Provider>
    );
    wrapper.find('#logoutSection a').simulate('click');
    expect(logOutSpy).toHaveBeenCalled();
  });
});
