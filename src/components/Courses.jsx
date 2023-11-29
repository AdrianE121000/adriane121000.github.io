import React from 'react';
import { useContext } from 'react';

import { CoursesContext } from '../context/CoursesContext';

import CoursesCard from './CoursesCard';

const Courses = () => {
  const { courses } = useContext(CoursesContext);

  return (
    <>
      <CoursesCard courses={courses} />
    </>
  );
};

export default Courses;
