import { Map, fromJS } from 'immutable';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { coursesNormalizer } from '../schema/courses';

const initialState = Map({
  courses: Map()
});

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      const normalizedData = coursesNormalizer(action.data);
      const coursesWithSelectedStatus = fromJS(normalizedData.entities.courses).map(course =>
        course.set('isSelected', false)
      );
      return state.merge({
        courses: coursesWithSelectedStatus
      });

    case SELECT_COURSE:
      return state.setIn(['courses', String(action.index), 'isSelected'], true);

    case UNSELECT_COURSE:
      return state.setIn(['courses', String(action.index), 'isSelected'], false);

    default:
      return state;
  }
};

export default courseReducer;
