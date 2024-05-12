import React from 'react';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';
import CourseListRow from './CourseListRow';

const CourseList = ({ listCourses }) => (
  <table>
    <thead>
    <CourseListRow isHeader={true} textFirstCell="Available courses" />
    <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
    </thead>
    <tbody>
    {listCourses.length === 0 ? (
    <tr><td colSpan="2">No course available yet</td></tr>
  ) : (
    listCourses.map(course => (
      <CourseListRow key={course.id} isHeader={false} textFirstCell={course.name} textSecondCell={String(course.credit)} />
    ))
  )}
    </tbody>
  </table>
);

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
