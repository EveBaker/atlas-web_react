import uiReducer from './uiReducer';
import { 
  DISPLAY_NOTIFICATION_DRAWER, 
  HIDE_NOTIFICATION_DRAWER, 
  LOGIN_SUCCESS, 
  LOGIN_FAILURE, 
  LOGOUT 
} from '../actions/uiActionTypes';

describe('uiReducer', () => {
  const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: null
  };

  it('should return the initial state when no action is passed', () => {
    expect(uiReducer(undefined, {})).toEqual(initialState);
  });

  it('should return the initial state when the action SELECT_COURSE is passed', () => {
    expect(uiReducer(undefined, { type: 'SELECT_COURSE' })).toEqual(initialState);
  });

  it('should change isNotificationDrawerVisible to true when DISPLAY_NOTIFICATION_DRAWER is passed', () => {
    const expectedState = {
      ...initialState,
      isNotificationDrawerVisible: true
    };
    expect(uiReducer(initialState, { type: DISPLAY_NOTIFICATION_DRAWER })).toEqual(expectedState);
  });

  it('should change isNotificationDrawerVisible to false when HIDE_NOTIFICATION_DRAWER is passed', () => {
    const state = {
      ...initialState,
      isNotificationDrawerVisible: true
    };
    const expectedState = {
      ...initialState,
      isNotificationDrawerVisible: false
    };
    expect(uiReducer(state, { type: HIDE_NOTIFICATION_DRAWER })).toEqual(expectedState);
  });

  it('should change isUserLoggedIn to true and set user when LOGIN_SUCCESS is passed', () => {
    const user = { email: 'test@example.com' };
    const expectedState = {
      ...initialState,
      isUserLoggedIn: true,
      user: user
    };
    expect(uiReducer(initialState, { type: LOGIN_SUCCESS, user })).toEqual(expectedState);
  });

  it('should change isUserLoggedIn to false and clear user when LOGIN_FAILURE is passed', () => {
    const state = {
      ...initialState,
      isUserLoggedIn: true,
      user: { email: 'test@example.com' }
    };
    const expectedState = {
      ...initialState,
      isUserLoggedIn: false,
      user: null
    };
    expect(uiReducer(state, { type: LOGIN_FAILURE })).toEqual(expectedState);
  });

  it('should change isUserLoggedIn to false and clear user when LOGOUT is passed', () => {
    const state = {
      ...initialState,
      isUserLoggedIn: true,
      user: { email: 'test@example.com' }
    };
    const expectedState = {
      ...initialState,
      isUserLoggedIn: false,
      user: null
    };
    expect(uiReducer(state, { type: LOGOUT })).toEqual(expectedState);
  });
});
