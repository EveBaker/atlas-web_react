import Enzyme from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';
import { render } from 'react-dom';

Enzyme.configure({ adapter: new Adapter() });

describe('CourseListRow', () => {
    it('renders one cell with colspan = 2 when textSecondCell does not exist', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Test" />);
        expect(wrapper.find('th').prop('colSpan')).toEqual("2");
    });

    it('renders two cells when textSecondCell is present', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Test" textSecondCell="Test2" />);
        expect(wrapper.find('th').length).toEqual(2);
      });
    
    it('renders correctly two td elements within a tr element when isHeader is false', () => {
        const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="Test" textSecondCell="Test2" />);
        expect(wrapper.find('td').length).toEqual(2);
    });
});