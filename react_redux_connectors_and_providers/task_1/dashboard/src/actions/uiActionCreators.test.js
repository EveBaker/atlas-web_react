import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { login, logout, displayNotificationDrawer, hideNotificationDrawer, loginRequest, loginSuccess, loginFailure } from './uiActionCreators';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('UI action creators', () => {
  it('login should create an action to log in', () => {
    const email = 'test@example.com';
    const password = 'password';
    const expectedAction = {
      type: LOGIN,
      user: { email, password }
    };
    expect(login(email, password)).toEqual(expectedAction);
  });

  it('logout should create an action to log out', () => {
    const expectedAction = {
      type: LOGOUT
    };
    expect(logout()).toEqual(expectedAction);
  });

  it('displayNotificationDrawer should create an action to display the notification drawer', () => {
    const expectedAction = {
      type: DISPLAY_NOTIFICATION_DRAWER
    };
    expect(displayNotificationDrawer()).toEqual(expectedAction);
  });

  it('hideNotificationDrawer should create an action to hide the notification drawer', () => {
    const expectedAction = {
      type: HIDE_NOTIFICATION_DRAWER
    };
    expect(hideNotificationDrawer()).toEqual(expectedAction);
  });
});

describe('loginRequest action creator', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('dispatches LOGIN and LOGIN_SUCCESS actions on successful API response', () => {
    const store = mockStore({});
    const userData = { email: 'test@example.com', password: 'password' };

    fetch.mockResponseOnce(JSON.stringify({ status: 'success' }));

    const expectedActions = [
      { type: LOGIN, user: userData },
      { type: LOGIN_SUCCESS, data: { status: 'success' } },
    ];

    return store.dispatch(loginRequest('test@example.com', 'password')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('dispatches LOGIN and LOGIN_FAILURE actions on failed API response', () => {
    const store = mockStore({});
    const userData = { email: 'test@example.com', password: 'password' };

    fetch.mockRejectOnce(new Error('Failed to fetch'));

    const expectedActions = [
      { type: LOGIN, user: userData },
      { type: LOGIN_FAILURE, error: 'Failed to fetch' },
    ];

    return store.dispatch(loginRequest('test@example.com', 'password')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
