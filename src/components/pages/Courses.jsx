import { useContext, useState, useRef } from 'react';
import { CoursesContext } from '../../context/CoursesContext';
import CoursesCard from '../cards/CoursesCard';
import { sortByTime } from '../../logic/sortCoursesByTime';
import { useForm } from 'react-hook-form';
import { FiSearch } from 'react-icons/fi';
import { LanguageContext } from '../../context/LanguageContext';
import Cookies from '../privacy/Cookies';
import { CoursesSkeleton } from '../utils/skeletons';

const Courses = () => {
  const { courses } = useContext(CoursesContext);
  const { translations } = useContext(LanguageContext);
  const [result, setResult] = useState([]);
  const sortedCourses = sortByTime(result.length === 0 ? courses : result);
  const isFiltered = useRef(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm();

  const onSubmit = (event) => {
    setResult(
      courses.filter((dato) =>
        dato.name.toLowerCase().includes(event.search.toLowerCase())
      )
    );
    resetField('search');
    isFiltered.current = true;
  };

  return (
    <>
      <Cookies />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex items-center flex-col'>
        <div className='flex mt-5'>
          <input
            id='search'
            type='text'
            placeholder={translations.search}
            className='w-60 md:w-80 lg:w-96 px-4 py-2 rounded-l-md focus:outline-none focus:ring focus:border-blue-300'
            {...register('search', { required: true })}
          />
          <button
            type='submit'
            className='bg-blue-500 text-white px-4 py-2 rounded-r-md'>
            <FiSearch />
          </button>
        </div>
        {errors.search && (
          <span className='text-red-500 mt-2'>{translations.error}</span>
        )}
      </form>
      {result.length === 0 && isFiltered.current === true ? (
        <div className='flex justify-center items-center mt-20'>
          <div
            className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded '
            role='alert'>
            <span className='block sm:inline'>{translations.noSearch}</span>
          </div>
        </div>
      ) : courses.length === 0 ? (
        <CoursesSkeleton />
      ) : (
        <CoursesCard courses={sortedCourses} />
      )}
    </>
  );
};

export default Courses;
