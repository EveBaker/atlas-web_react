import React from 'react';
import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

Enzyme.configure({ adapter: new Adapter() });

describe('BodySection', () => {
    it('renders an h2 and children correctly', () => {
        const wrapper = shallow(
            <BodySection title="test title">
                <p>test children node</p>
            </BodySection>
        );
        expect(wrapper.find('h2').text()).toEqual('test title');

        expect(wrapper.find('p').text()).toEqual('test children node');
    });
});