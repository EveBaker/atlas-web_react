import { Map, fromJS } from 'immutable';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';
import { NotificationTypeFilters } from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';

const initialState = Map ({
  notifications: Map(),
  filter: NotificationTypeFilters.DEFAULT
});

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
        const normalizedData = notificationsNormalizer(action.data);
        return state.merge({
          notifications: fromJS(normalizedData.entities.notifications)
        });

    case MARK_AS_READ:
      return state.setIn(['notifications', String(action.index), 'isRead'], true);

    case SET_TYPE_FILTER:
      return state.setIn(['filter', action.filter]);

    default:
      return state;
  }
};

export default notificationReducer;
