import FilterForm from '../utils/FilterForm';
import { useState, useRef, useEffect, useContext } from 'react';
import { sortByTime } from '../../logic/sortCoursesByTime';
import { CoursesContext } from '../../context/CoursesContext';
import { useForm } from 'react-hook-form';
import CoursesCard from '../cards/CoursesCard';
import { CourseMobileSkeleton, CoursesSkeleton } from '../utils/skeletons';
import ErrorMessage from '../utils/ErrorMessage';
import { LanguageContext } from '../../context/LanguageContext';
import tutorials from '../../mocks/tutorials.json';
import certifications from '../../mocks/certifications.json';

const Explore = () => {
  const { translations } = useContext(LanguageContext);
  //obtoner los cursos de la APi
  const { courses, loading, setFetchDone, error } = useContext(CoursesContext);
  //crear filtro para los ckeckbox
  const [filter, setFilter] = useState('courses');
  //crear filtro para lenguage de programacion
  const [language, setLanguage] = useState('all');
  //permitir hacer el fetch
  useEffect(() => {
    setFetchDone(true);
  }, [setFetchDone]);

  //crear array para guardar los resultados de los cursos filtrados
  const [result, setResult] = useState([]);

  //para saber si se filtro y si no se encontraron resultados mostrar que no hay resultados
  const isFiltered = useRef(false);

  useEffect(() => {
    setResult(
      filter === 'courses'
        ? courses.filter((dato) =>
            dato.name.toLowerCase().includes(language === 'all' ? '' : language)
          )
        : filter === 'tutorials'
        ? tutorials.courses.filter((dato) =>
            dato.name.toLowerCase().includes(language === 'all' ? '' : language)
          )
        : certifications.courses.filter((dato) =>
            dato.name.toLowerCase().includes(language === 'all' ? '' : language)
          )
    );
    isFiltered.current = true;
  }, [language, courses, filter]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm();

  const onSubmit = (event) => {
    const newResult = courses.filter((dato) =>
      dato.name.toLowerCase().includes(event.search.toLowerCase())
    );

    setResult(newResult);
    isFiltered.current = true;
    resetField('search');
  };

  return (
    <>
      <div className='bg-gray-800 mb-8 container mx-auto py-2 w-full rounded-xl shadow-lg shadow-violet-800'>
        <FilterForm
          setLanguage={setLanguage}
          setFilter={setFilter}
          handleSubmit={handleSubmit}
          register={register}
          errors={errors}
          onSubmit={onSubmit}
        />
      </div>

      {loading.current ? (
        <>
          <div className='hidden md:block'>
            <CoursesSkeleton />
          </div>
          <div className='block md:hidden'>
            <CourseMobileSkeleton />
          </div>
        </>
      ) : error !== undefined ? (
        <ErrorMessage text={translations.noFetch} />
      ) : result.length === 0 && isFiltered.current ? (
        <ErrorMessage text={translations.noSearch} />
      ) : (
        <>
          <CoursesCard courses={sortByTime(result)} />
        </>
      )}
    </>
  );
};

export default Explore;
