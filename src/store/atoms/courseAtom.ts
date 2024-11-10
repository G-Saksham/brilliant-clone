import { atom } from 'recoil';
import { CourseState } from '../../types/course';

export const courseState = atom<CourseState>({
  key: 'courseState',
  default: {
    courses: [],
    currentCourse: null,
    loading: false,
    error: null,
    selectedCategory: null,
  },
});