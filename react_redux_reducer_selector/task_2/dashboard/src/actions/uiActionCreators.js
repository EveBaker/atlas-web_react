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

export function loginFalure(error) {
  return {
    type: LOGIN_FAILURE,
    error
  };
}


export function loginRequest(email, password) {
  return async dispach => {
    dispach(login(email, password));

    try {
      const response = await fetch('/login-success.json');
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }

      const data = await response.json();
      dispach(loginSuccess(data));
    } catch (error) {
      dispach(loginFalure(error.message));
    }
  };
}