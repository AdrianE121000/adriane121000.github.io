import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CoursesContext } from '../../context/CoursesContext';
import { LanguageContext } from '../../context/LanguageContext';
import Cookies from '../utils/Cookies';
import CoursesCard from '../cards/CoursesCard';

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
        <div className='flex justify-center items-center mt-28'>
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
      <div className='mt-24'>
        <CoursesCard courses={coursesFilteredByCategory} />
      </div>
    </>
  );
};

export default Model;
