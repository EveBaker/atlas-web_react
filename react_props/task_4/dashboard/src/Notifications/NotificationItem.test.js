import React from 'react';
import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

Enzyme.configure({ adapter: new Adapter() });


describe('NotificationItem', () => {
  it('renders without crashing', () => {
    shallow(<NotificationItem type="default" value="test" />);
  });

  it('renders with correct type and value', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.prop('data-notification-type')).toEqual('default');
    expect(wrapper.text()).toEqual('test');
  });

  it('renders with dangerouslySetInnerHTML', () => {
    const htmlContent = { __html: '<u>test</u>' };
    const wrapper = shallow(<NotificationItem type="default" html={htmlContent} />);
    expect(wrapper.html()).toContain('<u>test</u>');
  });
});
