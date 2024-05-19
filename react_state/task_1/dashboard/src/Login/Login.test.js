import React from 'react';
import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import { shallow } from 'enzyme';
import Login from './Login';

Enzyme.configure({ adapter: new Adapter() });

describe('Login', () => {
  it('renders without crashing', () => {
    shallow(<Login />);
  });

  it('renders 2 text input tags and 2 label tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input[type="email"]').length).toEqual(1);
    expect(wrapper.find('input[type="password"]').length).toEqual(1);
    expect(wrapper.find('label').length).toEqual(2);
  });

  it('has a submit button that is disabled by default', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(true);
  });

  it('enables the submit button when both email and password fields are filled', () => {
    const wrapper = shallow(<Login />);
    wrapper.find('input#email').simulate('change', { target: { value: 'test@test.com' } });
    wrapper.find('input#password').simulate('change', { target: { value: 'password' } });
    expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(false);
  });
});
