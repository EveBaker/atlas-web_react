import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


describe('App Component', () => {
    test('renders without crashing', () => {
      shallow(<App />);
    });
  
    test('renders a div with class App-header', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find('.App-header')).toHaveLength(1);
    });
  
    test('renders a div with class App-body', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find('.App-body')).toHaveLength(1);
    });
  
    test('renders a div with class App-footer', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find('.App-footer')).toHaveLength(1);
    });
  });