import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { useCourseTimeCalculate } from '../../hooks/useCourseTimeCalculate';
import { useNavigate } from 'react-router-dom';
import Footer from '../utils/Footer';
import Cookies from '../utils/Cookies';
import { Left, Right } from '../utils/Icons';
import { CiCoffeeCup } from 'react-icons/ci';

const CourseCard = ({ course, imgCourse }) => {
  const { translations } = useContext(LanguageContext);
  const { calculateCourseTime } = useCourseTimeCalculate();
  const navigate = useNavigate();
  return (
    <>
      <Cookies />
      <div className='max-w-6xl mx-auto shadow-md shadow-violet-800 rounded-lg p-6 m-4'>
        <div className='flex flex-col md:flex-row'>
          <div className='md:w-1/3 pr-6'>
            <img
              src={imgCourse}
              alt={course.name}
              className='w-full h-auto rounded-lg'
            />
          </div>
          <div className='md:w-2/3'>
            <h2 className='text-2xl mt-3 md:mt-0 md:text-3xl font-bold mb-2'>
              {course.name}
            </h2>
            <p className='text-lg md:text-xl text-gray-400 mb-2'>
              {translations.fecha}:{' '}
              {calculateCourseTime(course.last_update_date)}
            </p>
            <p className='text-lg md:text-xl text-gray-400 mb-2'>
              {translations.lenguaje}: {course.language}
            </p>
            <p className='text-lg md:text-xl text-gray-400 mb-2'>
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
        <div className='flex justify-evenly mt-4'>
          <button
            onClick={() => navigate(-1)}
            className='bg-violet-800 shadow-md hover:bg-gray-950 hover:text-violet-800 hover:shadow-violet-800 hover:scale-110 transition duration-300 ease-in-out font-bold text-xs md:text-sm py-1 md:py-2 px-1 md:px-4 rounded inline-flex items-center'>
            <Left />
            <span className='ml-0 md:ml-2'>{translations.volver}</span>
          </button>
          <button
            onClick={() => navigate('/donation')}
            className='bg-violet-800 shadow-md hover:bg-gray-950 hover:text-violet-800 hover:shadow-violet-800 hover:scale-110 transition duration-300 ease-in-out font-bold text-xs md:text-sm py-1 md:py-2 px-1 md:px-4 rounded inline-flex items-center'>
            <CiCoffeeCup size='25px' />
            <span className='ml-0 md:ml-1'>{translations.coffe}</span>
          </button>
          <a
            href={course.url}
            target='_blank'
            rel='noreferrer'
            className='bg-violet-800 shadow-md hover:bg-gray-950 hover:text-violet-800 hover:shadow-violet-800 hover:scale-110 transition duration-300 ease-in-out font-bold text-xs md:text-sm py-1 md:py-2 px-1 md:px-4 rounded inline-flex items-center'>
            <span className='mr-0 md:mr-2'>{translations.ir}</span>
            <Right />
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CourseCard;
