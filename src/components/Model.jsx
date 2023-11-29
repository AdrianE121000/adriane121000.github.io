import React from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CoursesContext } from '../context/CoursesContext';
import CoursesCard from './CoursesCard';

const Model = () => {
  const { category } = useParams();
  const { courses } = useContext(CoursesContext);

  const coursesFilteredByCategory = courses.filter(
    (course) => course.category === category
  );

  if (coursesFilteredByCategory.length === 0) {
    return <div>No hay cursos de esta categoria</div>;
  }
  return (
    <>
      <CoursesCard courses={coursesFilteredByCategory} />
    </>
  );
};

export default Model;
