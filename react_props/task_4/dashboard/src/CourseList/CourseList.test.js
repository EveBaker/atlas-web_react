import React from 'react';
import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import { shallow } from 'enzyme'
import CourseList from './CourseList';

Enzyme.configure({ adapter: new Adapter() });

describe('CourseList', () => {
    it('renders without crashing', () => {
      shallow(<CourseList />);
    });

    it('renders 5 different rows', () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.find('CourseListRow').length).toEqual(5);
    });
});