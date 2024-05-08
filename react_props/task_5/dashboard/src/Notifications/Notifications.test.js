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
});
