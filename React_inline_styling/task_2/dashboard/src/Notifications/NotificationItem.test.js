import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import { StyleSheetTestUtils } from 'aphrodite';
import NotificationItem from './NotificationItem';

Enzyme.configure({ adapter: new Adapter() });

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('NotificationItem', () => {
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
    const li = wrapper.find('li');
    expect(li.prop('data-notification-type')).toEqual('default');
    expect(li.html()).toContain('<u>test</u>');
  });

  it('applies the correct class for default type', () => {
    const wrapper = shallow(<NotificationItem id={1} type="default" value="test" markAsRead={mockMarkAsRead} />);
    expect(wrapper.find('li').prop('className')).toContain('defaultItem');
  });

  it('applies the correct class for urgent type', () => {
    const wrapper = shallow(<NotificationItem id={1} type="urgent" value="test" markAsRead={mockMarkAsRead} />);
    expect(wrapper.find('li').prop('className')).toContain('urgentItem');
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
