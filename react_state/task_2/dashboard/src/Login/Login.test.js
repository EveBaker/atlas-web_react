import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import Login from './Login';

Enzyme.configure({ adapter: new Adapter() });
describe('Login', () => {
  let logInMock;

  beforeEach(() => {
    logInMock = jest.fn();
  });

  it('renders without crashing', () => {
    shallow(<Login logIn={logInMock} />);
  });

  it('renders 2 text input tags and 2 label tags', () => {
    const wrapper = shallow(<Login logIn={logInMock} />);
    expect(wrapper.find('input[type="email"]').length).toBe(1);
    expect(wrapper.find('input[type="password"]').length).toBe(1);
    expect(wrapper.find('label').length).toBe(2);
  });

  it('calls logIn on form submit', () => {
    const wrapper = shallow(<Login logIn={logInMock} />);
    wrapper.setState({ email: 'test@example.com', password: 'password', enableSubmit: true });
    wrapper.find('form').simulate('submit', { preventDefault: () => {} });
    expect(logInMock).toHaveBeenCalledWith('test@example.com', 'password');
  });
});
