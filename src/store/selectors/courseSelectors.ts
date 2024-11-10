import { selector } from 'recoil';
import { courseState } from '../atoms/courseAtom';

export const filteredCourses = selector({
  key: 'filteredCourses',
  get: ({get}) => {
    const state = get(courseState);
    if (!state.selectedCategory) return state.courses;
    return state.courses.filter(course => course.category === state.selectedCategory);
  },
});