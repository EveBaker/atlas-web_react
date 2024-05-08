import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

Enzyme.configure({ adapter: new Adapter() });

describe('CourseList', () => {
  it('renders without crashing', () => {
    shallow(<CourseList />);
  });

  it('renders no course rows when listCourses is empty', () => {
    const wrapper = shallow(<CourseList listCourses={[]} />);
    expect(wrapper.find('td[colSpan="2"]').text()).toContain('No course available yet');
  });

  it('renders course rows correctly when listCourses is provided', () => {
    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    expect(wrapper.find(CourseListRow).length).toBe(5);
  });
});
