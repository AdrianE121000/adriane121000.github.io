import { useRef } from 'react';
import FilterForm from '../utils/FilterForm';
import { useState } from 'react';
import { sortByTime } from '../../logic/sortCoursesByTime';
import { CoursesContext } from '../../context/CoursesContext';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import CoursesCard from '../cards/CoursesCard';
import { CoursesSkeleton } from '../utils/skeletons';

const Explore = () => {
  const { courses, loading, setFetchDone } = useContext(CoursesContext);
  useEffect(() => {
    setFetchDone(true);
  }, [setFetchDone]);
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

    console.log(event);
  };
  return (
    <>
      <div className='bg-gray-300 mb-8 py-2'>
        <FilterForm
          handleSubmit={handleSubmit}
          register={register}
          errors={errors}
          onSubmit={onSubmit}
        />
      </div>
      {loading.current ? (
        <CoursesSkeleton />
      ) : (
        <CoursesCard courses={sortedCourses} />
      )}
    </>
  );
};

export default Explore;
