import { Map } from 'immutable';
import uiReducer from './uiReducer';
import { 
  DISPLAY_NOTIFICATION_DRAWER, 
  HIDE_NOTIFICATION_DRAWER, 
  LOGIN_SUCCESS, 
  LOGIN_FAILURE, 
  LOGOUT 
} from '../actions/uiActionTypes';

describe('uiReducer', () => {
  const initialState = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {}
  });

  it('should return the initial state when no action is passed', () => {
    expect(uiReducer(undefined, {}).toJS()).toEqual(initialState.toJS());
  });

  it('should return the initial state when the action SELECT_COURSE is passed', () => {
    expect(uiReducer(undefined, { type: 'SELECT_COURSE' }).toJS()).toEqual(initialState.toJS());
  });

  it('should change isNotificationDrawerVisible to true when DISPLAY_NOTIFICATION_DRAWER is passed', () => {
    const expectedState = initialState.set('isNotificationDrawerVisible', true);
    expect(uiReducer(initialState, { type: DISPLAY_NOTIFICATION_DRAWER }).toJS()).toEqual(expectedState.toJS());
  });

  it('should change isNotificationDrawerVisible to false when HIDE_NOTIFICATION_DRAWER is passed', () => {
    const state = initialState.set('isNotificationDrawerVisible', true);
    const expectedState = initialState.set('isNotificationDrawerVisible', false);
    expect(uiReducer(state, { type: HIDE_NOTIFICATION_DRAWER }).toJS()).toEqual(expectedState.toJS());
  });

  it('should change isUserLoggedIn to true when LOGIN_SUCCESS is passed', () => {
    const expectedState = initialState.set('isUserLoggedIn', true);
    expect(uiReducer(initialState, { type: LOGIN_SUCCESS }).toJS()).toEqual(expectedState.toJS());
  });

  it('should change isUserLoggedIn to false when LOGIN_FAILURE is passed', () => {
    const state = initialState.set('isUserLoggedIn', true);
    const expectedState = initialState.set('isUserLoggedIn', false);
    expect(uiReducer(state, { type: LOGIN_FAILURE }).toJS()).toEqual(expectedState.toJS());
  });

  it('should change isUserLoggedIn to false when LOGOUT is passed', () => {
    const state = initialState.set('isUserLoggedIn', true);
    const expectedState = initialState.set('isUserLoggedIn', false);
    expect(uiReducer(state, { type: LOGOUT }).toJS()).toEqual(expectedState.toJS());
  });
});
