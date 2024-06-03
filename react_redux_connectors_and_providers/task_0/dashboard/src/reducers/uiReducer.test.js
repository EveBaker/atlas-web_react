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
    user: {}
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

  it('should change isUserLoggedIn to true when LOGIN_SUCCESS is passed', () => {
    const expectedState = {
      ...initialState,
      isUserLoggedIn: true
    };
    expect(uiReducer(initialState, { type: LOGIN_SUCCESS })).toEqual(expectedState);
  });

  it('should change isUserLoggedIn to false when LOGIN_FAILURE is passed', () => {
    const state = {
      ...initialState,
      isUserLoggedIn: true
    };
    const expectedState = {
      ...initialState,
      isUserLoggedIn: false
    };
    expect(uiReducer(state, { type: LOGIN_FAILURE })).toEqual(expectedState);
  });

  it('should change isUserLoggedIn to false when LOGOUT is passed', () => {
    const state = {
      ...initialState,
      isUserLoggedIn: true
    };
    const expectedState = {
      ...initialState,
      isUserLoggedIn: false
    };
    expect(uiReducer(state, { type: LOGOUT })).toEqual(expectedState);
  });
});
