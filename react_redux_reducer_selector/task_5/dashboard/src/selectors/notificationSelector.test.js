import { fromJS } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';
import { NotificationTypeFilters } from '../actions/notificationActionTypes';

describe('notification selector', () => {
    const state = fromJS ({
        notifications: {
            1: { id: 1, isRead: false, type: 'default', value: 'New course available'},
            2: {  id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
            3: { id: 3, isRead: false, type: 'urgent', value: 'New data available' } 
        },
        filter: NotificationTypeFilters.DEFAULT
    });

    it('filterTypeSelected should return filter type', () => {
        expect(filterTypeSelected(state)).toEqual(NotificationTypeFilters.DEFAULT);
    });

    it('getNotifications should return the list of notifications', () => {
        const expectedNotifications = fromJS({
          1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
          2: { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
          3: { id: 3, isRead: false, type: 'urgent', value: 'New data available' }
        });
        expect(getNotifications(state)).toEqual(expectedNotifications);
      });
    
      it('getUnreadNotifications should return the list of unread notifications', () => {
        const expectedUnreadNotifications = fromJS({
          1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
          3: { id: 3, isRead: false, type: 'urgent', value: 'New data available' }
        });
        expect(getUnreadNotifications(state)).toEqual(expectedUnreadNotifications);
    });
});