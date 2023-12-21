import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { useCourseTimeCalculate } from '../../hooks/useCourseTimeCalculate';
import { useNavigate } from 'react-router-dom';
import Footer from '../utils/Footer';
import Cookies from '../utils/Cookies';

const CourseCard = ({ course, imgCourse }) => {
  const { translations } = useContext(LanguageContext);
  const { calculateCourseTime } = useCourseTimeCalculate();
  const navigate = useNavigate();
  return (
    <>
      <Cookies />
      <div className='max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6 m-4'>
        <div className='flex flex-col md:flex-row'>
          <div className='md:w-1/3 pr-6'>
            <img
              src={imgCourse}
              alt={course.name}
              className='w-full h-auto rounded-lg'
            />
          </div>
          <div className='md:w-2/3'>
            <h2 className='text-2xl md:text-3xl font-bold mb-2'>
              {course.name}
            </h2>
            <p className='text-lg md:text-xl text-gray-600 mb-2'>
              {translations.fecha}:{' '}
              {calculateCourseTime(course.last_update_date)}
            </p>
            <p className='text-lg md:text-xl text-gray-600 mb-2'>
              {translations.lenguaje}: {course.language}
            </p>
            <p className='text-lg md:text-xl text-gray-600 mb-2'>
              {translations.cat}: {course.category}
            </p>
          </div>
        </div>
        <div className='mt-4'>
          <p
            className='text-lg md:text-xl'
            dangerouslySetInnerHTML={{ __html: course.description }}
          />
        </div>
        <div className='flex justify-between mt-4'>
          <button
            onClick={() => navigate(-1)}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center'>
            <span>{translations.volver}</span>
          </button>
          <a
            href={course.url}
            target='_blank'
            rel='noreferrer'
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center'>
            <span>{translations.ir}</span>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CourseCard;
