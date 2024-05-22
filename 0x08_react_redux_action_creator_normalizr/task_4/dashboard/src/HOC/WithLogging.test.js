import React from 'react';
import Enzyme, { mount  } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import WithLogging from './WithLogging';


Enzyme.configure({ adapter: new Adapter() });

describe('WithLogging HOC', () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });
  
    it('logs correctly on mount and unmount with simple HTML', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        const Element = () => <p>Test</p>;
        const WrappedElement = WithLogging(Element);
    
        const wrapper = mount(<WrappedElement />);
        expect(consoleSpy).toHaveBeenCalledWith('Component Element is mounted');
        wrapper.unmount();
        expect(consoleSpy).toHaveBeenCalledWith('Component Element is going to unmount');
    });
  
    it('logs correctly on mount and unmount with the Login component', () => {
      const consoleSpy = jest.spyOn(console, 'log');
      class Login extends React.Component {
        render() {
          return <div>Login Component</div>;
        }
      }
      const WrappedLogin = WithLogging(Login);
  
      const wrapper = mount(<WrappedLogin />);
      expect(consoleSpy).toHaveBeenCalledWith('Component Login is mounted');
      wrapper.unmount();
      expect(consoleSpy).toHaveBeenCalledWith('Component Login is going to unmount');
    });
  });