import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import { StyleSheetTestUtils } from 'aphrodite';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

Enzyme.configure({ adapter: new Adapter() });

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('Notifications', () => {
  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('renders no notifications correctly when listNotifications is empty', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
    expect(wrapper.find(NotificationItem).length).toBe(0);
    expect(wrapper.find('div').at(0).text()).toContain('Your notifications');
    expect(wrapper.find('li').text()).toContain('No new notifications for now');
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

  it('calls handleDisplayDrawer when menu item is clicked', () => {
    const handleDisplayDrawer = jest.fn();
    const wrapper = shallow(<Notifications handleDisplayDrawer={handleDisplayDrawer} />);
    
    wrapper.find('div').at(0).simulate('click');
    
    expect(handleDisplayDrawer).toHaveBeenCalled();
  });

  it('calls handleHideDrawer when close button is clicked', () => {
    const handleHideDrawer = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer={true} handleHideDrawer={handleHideDrawer} />);
    
    wrapper.find('button').simulate('click');
    
    expect(handleHideDrawer).toHaveBeenCalled();
  });

  it('calls markNotificationAsRead when a notification is marked as read', () => {
    const markNotificationAsRead = jest.fn();
    const notifications = [
      { id: 1, type: 'default', value: "New course available" },
      { id: 2, type: 'urgent', value: "New resume available" }
    ];
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={notifications}
        markNotificationAsRead={markNotificationAsRead}
      />
    );

    wrapper.find(NotificationItem).first().props().markAsRead();
    expect(markNotificationAsRead).toHaveBeenCalledWith(1);
  });
});

describe('Notifications display logic', () => {
  it('menu item is displayed when displayDrawer is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.find('div').at(0).text()).toContain('Your notifications');
    expect(wrapper.find('div').at(1).exists()).toBeFalsy();
  });

  it('menu item and div.Notifications are displayed when displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('div').at(0).text()).toContain('Your notifications');
    expect(wrapper.find('div').at(1).exists()).toBeTruthy();
  });
});
