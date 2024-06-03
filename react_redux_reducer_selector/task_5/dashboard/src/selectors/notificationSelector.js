import { createSelector } from 'reselect';

// Select the filter 
export const filterTypeSelected = (state) => state.get('filter');

// Select the notifications
export const getNotifications = (state) => state.get('notifications');

// Select unread
export const getUnreadNotifications = createSelector(
  [getNotifications],
  (notifications) => notifications.filter(notification => !notification.get('isRead'))
);
