import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

Enzyme.configure({ adapter: new Adapter() });

describe('Notifications', () => {
  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('renders no notifications correctly when listNotifications is empty', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(wrapper.find(NotificationItem).length).toBe(0);
    expect(wrapper.find('.menuItem').text()).toContain('Your notifications');
    expect(wrapper.text()).toContain('No new notifications for now');
  });

  it('renders with notifications correctly', () => {
    const notifications = [
      { id: 1, type: 'default', value: "New course available" },
      { id: 2, type: 'urgent', value: "New resume available" }
    ];
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={notifications} />);
    expect(wrapper.find(NotificationItem).length).toBe(2);
  });
  
  it('does not rerender when the list of notifications does not grow', () => {
    const notifications = [{ id: 1, type: 'default', value: "New course available" }];
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={notifications} />);
    
    wrapper.setProps({ listNotifications: notifications });
    
    expect(wrapper.find(NotificationItem).length).toBe(1);
  });

  it('rerenders when the list of notifications grows', () => {
    const notifications = [{ id: 1, type: 'default', value: "New course available" }];
    const moreNotifications = [
      ...notifications,
      { id: 2, type: 'urgent', value: "New resume available" }
    ];
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={notifications} />);
    wrapper.setProps({ listNotifications: moreNotifications });
    
    expect(wrapper.find(NotificationItem).length).toBe(2);
  });
});

describe('Notifications', () => {
  it('menu item is displayed when displayDrawer is false', () => {
      const wrapper = shallow(<Notifications displayDrawer={false} />);
      expect(wrapper.find('.menuItem').exists()).toBeTruthy();
      expect(wrapper.find('.Notifications').exists()).toBeFalsy();
  });

  it('menu item and div.Notifications are displayed when displayDrawer is true', () => {
      const wrapper = shallow(<Notifications displayDrawer={true} />);
      expect(wrapper.find('.menuItem').exists()).toBeTruthy();
      expect(wrapper.find('.Notifications').exists()).toBeTruthy();
  });
});

describe('markAsRead', () => {
  it('calls console.log with the right message when markAsRead is triggered', () => {
    const logSpy = jest.spyOn(console, 'log');
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    wrapper.instance().markAsRead(1);
    expect(logSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');
    logSpy.mockRestore();
  });
});

