import React from 'react';
import { fromJS } from 'immutable';
import Enzyme, { shallow, mount } from 'enzyme';
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
      ui: fromJS({
        isLoggedIn: false,
      }),
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
      ui: fromJS({
        isLoggedIn: true,
      }),
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

  it('has a default state for displayDrawer set to be false', () => {
    const component = wrapper.find(App).instance();
    expect(component.state.displayDrawer).toBe(false);
  });

  it('changes displayDrawer state to true when handleDisplayDrawer is called', () => {
    const component = wrapper.find(App).instance();
    component.handleDisplayDrawer();
    expect(component.state.displayDrawer).toBe(true);
  });

  it('changes displayDrawer state to false when handleHideDrawer is called', () => {
    const component = wrapper.find(App).instance();
    component.handleDisplayDrawer(); // true
    component.handleHideDrawer(); // false
    expect(component.state.displayDrawer).toBe(false);
  });
});

describe('mapStateToProps', () => {
  it('should return the correct state', () => {
    const state = fromJS({
      ui: {
        isUserLoggedIn: true,
      },
    });
    const expectedProps = {
      isLoggedIn: true,
    };
    expect(mapStateToProps(state)).toEqual(expectedProps);
  });
});
