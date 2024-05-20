import React from 'react';
import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import { shallow } from 'enzyme';
import Footer from './Footer';
import AppContext from '../App/AppContext';

Enzyme.configure({ adapter: new Adapter() });

describe('Footer', () => {
  it('renders without crashing', () => {
    shallow(<Footer />);
  });

  it('renders at least the Copyright text', () => {
    const contextValue = { user: { isLoggedIn: false } };
    const wrapper = shallow(
      <AppContext.Provider value={contextValue}>
        <Footer />
      </AppContext.Provider>
    ).dive().dive();
    expect(wrapper.text()).toContain('Copyright');
  });

  it('displays the Contact us link when the user is logged in', () => {
    const contextValue = { user: { isLoggedIn: true } };
    const wrapper = shallow(
      <AppContext.Provider value={contextValue}>
        <Footer />
      </AppContext.Provider>
    ).dive().dive();
    expect(wrapper.find('a').exists()).toBe(true);
    expect(wrapper.find('a').text()).toBe('Contact us');
  });

  it('does not display the Contact us link when the user is not logged in', () => {
    const contextValue = { user: { isLoggedIn: false } };
    const wrapper = shallow(
      <AppContext.Provider value={contextValue}>
        <Footer />
      </AppContext.Provider>
    ).dive().dive();
    expect(wrapper.find('a').exists()).toBe(false);
  });
});
