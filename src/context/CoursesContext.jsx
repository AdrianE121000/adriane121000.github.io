import { createContext } from 'react';
import { courses } from '../assets/courses.json';

export const CoursesContext = createContext();

export function CoursesProvider({ children }) {
  return (
    <CoursesContext.Provider value={{ courses }}>
      {children}
    </CoursesContext.Provider>
  );
}
