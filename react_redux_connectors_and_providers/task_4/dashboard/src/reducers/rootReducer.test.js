import { fromJS, Map } from 'immutable';
import rootReducer from './rootReducer';

describe('rootReducer', () => {
  it('should return the initial state', () => {
    const initialState = fromJS({
      courses: Map({}),
      notifications: Map({}),
      ui: Map({
        isNotificationDrawerVisible: false,
        isUserLoggedIn: false,
        user: {},
      }),
    });

    expect(rootReducer(undefined, {})).toEqual(initialState);
  });
});
