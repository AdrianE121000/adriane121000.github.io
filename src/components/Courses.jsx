import React from 'react';
import { useContext } from 'react';
import { CoursesContext } from '../context/CoursesContext';
import CoursesCard from './CoursesCard';
import { sortByTime } from '../logic/sortCoursesByTime';

const Courses = () => {
  const { courses } = useContext(CoursesContext);
  const sortedCourses = sortByTime(courses);

  return (
    <>
      <CoursesCard courses={sortedCourses} />
    </>
  );
};

export default Courses;
