import React from 'react';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow';

const styles = StyleSheet.create({
  CourseList: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  thTd: {
    border: '1px solid black',
    padding: '8px',
    textAlign: 'left',
  },
});

const CourseList = ({ listCourses }) => (
  <table className={css(styles.CourseList)}>
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
