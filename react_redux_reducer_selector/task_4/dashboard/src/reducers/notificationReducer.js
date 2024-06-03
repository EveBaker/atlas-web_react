import { Map, fromJS } from 'immutable';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';
import { NotificationTypeFilters } from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';

const initialState = Map({
  notifications: Map(),
  filter: NotificationTypeFilters.DEFAULT
});

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const normalizedData = notificationsNormalizer(action.data);
      const notificationsWithReadStatus = fromJS(normalizedData.entities.notifications).map(notification =>
        notification.set('isRead', false)
      );
      return state.merge({
        notifications: notificationsWithReadStatus
      });

    case MARK_AS_READ:
      return state.setIn(['notifications', String(action.index), 'isRead'], true);

    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);

    default:
      return state;
  }
};

export default notificationReducer;
