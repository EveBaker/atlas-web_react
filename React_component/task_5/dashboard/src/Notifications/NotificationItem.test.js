import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import NotificationItem from './NotificationItem';

Enzyme.configure({ adapter: new Adapter() });

describe('NotificationItem', () => {
  // Create a mock function for markAsRead
  const mockMarkAsRead = jest.fn();

  it('renders without crashing', () => {
    shallow(<NotificationItem id={1} type="default" value="test" markAsRead={mockMarkAsRead} />);
  });

  it('renders with correct type and value', () => {
    const wrapper = shallow(<NotificationItem id={1} type="default" value="test" markAsRead={mockMarkAsRead} />);
    expect(wrapper.find('li').prop('data-notification-type')).toEqual('default');
    expect(wrapper.find('li').text()).toEqual('test');
  });

  it('renders with dangerouslySetInnerHTML', () => {
    const htmlContent = { __html: '<u>test</u>' };
    const wrapper = shallow(<NotificationItem id={1} type="default" html={htmlContent} markAsRead={mockMarkAsRead} />);
    expect(wrapper.html()).toContain('<li data-notification-type="default"><u>test</u></li>');
});
});

describe('NotificationItem - onClick', () => {
  it('calls markAsRead with the right ID', () => {
    const markAsReadSpy = jest.fn();
    const wrapper = shallow(<NotificationItem id={1} type="default" value="test" markAsRead={markAsReadSpy} />);
    wrapper.simulate('click');
    expect(markAsReadSpy).toHaveBeenCalledWith(1);
  });
});
