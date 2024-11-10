export interface Course {
    id: string;
    title: string;
    category: 'Math' | 'Data' | 'Computer Science' | 'Science';
    description: string;
    isNew: boolean;
    imageUrl: string;
    progress?: number;
}
    
export interface CourseState {
    courses: Course[];
    currentCourse: Course | null;
    loading: boolean;
    error: string | null;
    selectedCategory: string | null;
}