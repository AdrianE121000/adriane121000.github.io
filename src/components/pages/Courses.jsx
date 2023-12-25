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
import { SEO } from '../utils/SEO';

const keywords = [
  'online courses',
  'discounted courses',
  'programming courses',
  'web development',
  'remote learning',
  'digital skills',
  'e-learning',
  'technology education',
  'software development',
  'IT certification',
  'cursos en línea',
  'cursos con descuento',
  'cursos de programación',
  'desarrollo web',
  'aprendizaje remoto',
  'habilidades digitales',
  'educación en línea',
  'tecnología educativa',
  'desarrollo de software',
  'certificación en tecnologías de la información',
];

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
      <SEO
        title='learnDeals | Courses'
        description='All courses of the learnDeals web site.'
        image='https://raw.githubusercontent.com/adriane121000/adriane121000/master/resources/learnDeals.jpg'
        keywords={keywords}
      />
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
          <Cookies />
          <CoursesCard courses={sortedCourses} />
        </>
      )}
    </>
  );
};

export default Courses;
