import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';
import { useCourseFetch } from '../hooks/useCourseFetch';
import { useCourseTimeCalculate } from '../hooks/useCourseTimeCalculate';

const Course = () => {
  const { translations } = useContext(LanguageContext);
  const { calculateCourseTime } = useCourseTimeCalculate();
  const { key } = useParams();
  const navigate = useNavigate();

  const { course, error, imgCourse } = useCourseFetch(key);

  if (error != undefined) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <div
          className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative'
          role='alert'>
          <strong className='font-bold'>Error: </strong>
          <span className='block sm:inline'>{translations.noFetch2}</span>
        </div>
      </div>
    );
  }
  return (
    <>
      {course.name === undefined ? (
        <div className='flex justify-center items-center h-screen'>
          <div className='w-16 h-16 relative'>
            <div className='absolute w-full h-full border-4 border-gray-950 rounded-full border-dashed border-opacity-50 animate-spin'></div>
          </div>
        </div>
      ) : (
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
      )}
    </>
  );
};

export default Course;
