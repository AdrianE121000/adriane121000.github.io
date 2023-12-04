import React from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CoursesContext } from '../context/CoursesContext';
import { LanguageContext } from '../context/LanguageContext';
import Cookies from './Cookies';
import CoursesCard from './CoursesCard';

const Model = () => {
  const { category } = useParams();
  const { courses } = useContext(CoursesContext);
  const { translations } = useContext(LanguageContext);

  const coursesFilteredByCategory = courses.filter(
    (course) => course.category === category
  );

  if (coursesFilteredByCategory.length === 0) {
    return (
      <>
        <Cookies />
        <div className='flex justify-center items-center mt-20'>
          <div
            className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded '
            role='alert'>
            <span className='block sm:inline'>{translations.noCourses}</span>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <Cookies />
      <CoursesCard courses={coursesFilteredByCategory} />
    </>
  );
};

export default Model;
