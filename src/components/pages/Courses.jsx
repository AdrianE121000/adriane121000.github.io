import { useContext, useState, useRef } from 'react';
import { CoursesContext } from '../../context/CoursesContext';
import CoursesCard from '../cards/CoursesCard';
import { sortByTime } from '../../logic/sortCoursesByTime';
import { useForm } from 'react-hook-form';
import { LanguageContext } from '../../context/LanguageContext';
import Cookies from '../utils/Cookies';
import { CourseMobileSkeleton, CoursesSkeleton } from '../utils/skeletons';
import { useEffect } from 'react';
import Form from '../utils/Form';
import ErrorMessage from '../utils/ErrorMessage';
import { Helmet } from 'react-helmet';

const Courses = () => {
  const { courses, error, loading, setFetchDone } = useContext(CoursesContext);
  const { translations } = useContext(LanguageContext);
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
  };

  return (
    <>
      <Helmet>
        <title>learnDeals | Courses</title>
      </Helmet>
      <Form
        handleSubmit={handleSubmit}
        register={register}
        errors={errors}
        onSubmit={onSubmit}
      />
      {result.length === 0 && isFiltered.current === true ? (
        <ErrorMessage text={translations.noSearch} />
      ) : loading.current ? (
        <>
          <div className='hidden md:block'>
            <CoursesSkeleton />
          </div>
          <div className='block md:hidden'>
            <CourseMobileSkeleton />
          </div>
        </>
      ) : error != undefined ? (
        <ErrorMessage text={translations.noFetch} />
      ) : (
        <>
          <Helmet>
            <title>learnDeals | Courses</title>
            <meta
              name='description'
              content='All Courses of the web site.'
            />
            <meta
              property='og:title'
              content='learnDeals | Courses'
            />
            <meta
              property='og:description'
              content='All Courses of the web site.'
            />
            <meta
              property='og:image'
              content='https://raw.githubusercontent.com/adriane121000/adriane121000/master/resources/learnDeals.jpg'
            />
          </Helmet>
          <Cookies />
          <CoursesCard courses={sortedCourses} />
        </>
      )}
    </>
  );
};

export default Courses;
