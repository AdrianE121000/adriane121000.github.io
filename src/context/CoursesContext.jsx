import { createContext } from 'react';
import { useAllCoursesFetch } from '../hooks/useAllCoursesFetch';

export const CoursesContext = createContext();

export function CoursesProvider({ children }) {
  const { courses, error } = useAllCoursesFetch();
  return (
    <CoursesContext.Provider value={{ courses, error }}>
      {children}
    </CoursesContext.Provider>
  );
}
