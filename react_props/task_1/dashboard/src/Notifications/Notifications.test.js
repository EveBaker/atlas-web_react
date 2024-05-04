import React from 'react';
import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import { shallow } from 'enzyme';
import Notifications from './Notifications';


Enzyme.configure({ adapter: new Adapter() });

describe('Notifications Component', () => {
  test('renders without crashing', () => {
    shallow(<Notifications />);
  });

  test('renders three list items', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('li')).toHaveLength(3);
  });

  test('renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.text()).toContain('Here is the list of notifications');
  });
});