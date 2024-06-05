import React from 'react';
import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import { shallow } from 'enzyme';
import BodySection from './BodySection';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

Enzyme.configure({ adapter: new Adapter() });

describe('BodySectionWithMarginBottom', () => {
    it('renders BodySection with passed props', () => {
      const wrapper = shallow(
        <BodySectionWithMarginBottom title="example title">
          <p>example content</p>
        </BodySectionWithMarginBottom>
      );

      expect(wrapper.find(BodySection).exists()).toBe(true);
      const bodySection = wrapper.find(BodySection);
      expect(bodySection.props().title).toEqual('example title');
      expect(bodySection.contains(<p>example content</p>)).toBe(true);
    });
  });