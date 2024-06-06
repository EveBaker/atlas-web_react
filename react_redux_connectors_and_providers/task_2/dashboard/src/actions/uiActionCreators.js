import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';

export function login(email, password) {
  return {
    type: LOGIN,
    user: { email, password }
  };
}

export function logout() {
  return {
    type: LOGOUT
  };
}

export function displayNotificationDrawer() {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER
  };
}

export function hideNotificationDrawer() {
  return {
    type: HIDE_NOTIFICATION_DRAWER
  };
}

export function loginSuccess(data) {
  return {
    type: LOGIN_SUCCESS,
    data
  };
}

export function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    error
  };
}

export function loginRequest(email, password) {
  return async dispatch => {
    dispatch(login(email, password));

    try {
      const response = await fetch('/login-success.json');
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }

      const data = await response.json();
      dispatch(loginSuccess(data));
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };
}
