import React, { useContext, useState, useRef } from 'react';
import { CoursesContext } from '../context/CoursesContext';
import CoursesCard from './CoursesCard';
import { sortByTime } from '../logic/sortCoursesByTime';
import { useForm } from 'react-hook-form';
import { FiSearch } from 'react-icons/fi';

const Courses = () => {
  const { courses } = useContext(CoursesContext);
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
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex items-center flex-col mt-5'>
        <div className='flex'>
          <input
            id='search'
            type='text'
            placeholder='search'
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
          <span className='text-red-500 mt-2'>introduce algo para buscar</span>
        )}
      </form>
      {result.length === 0 && isFiltered.current === true ? (
        <div className='flex justify-center items-center mt-20'>
          <div
            className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative'
            role='alert'>
            <span className='block sm:inline'>
              No se encontraron cursos para esta busqueda
            </span>
          </div>
        </div>
      ) : (
        <CoursesCard courses={sortedCourses} />
      )}
    </>
  );
};

export default Courses;
