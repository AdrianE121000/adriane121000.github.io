import FilterForm from '../utils/FilterForm';
import { useState } from 'react';
import { sortByTime } from '../../logic/sortCoursesByTime';
import { CoursesContext } from '../../context/CoursesContext';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import CoursesCard from '../cards/CoursesCard';
import { CourseMobileSkeleton, CoursesSkeleton } from '../utils/skeletons';
import { useRef } from 'react';
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
  //crear filtro para lenguage de prigramacion
  const [language, setLanguage] = useState('todos');
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
            dato.name
              .toLowerCase()
              .includes(language === 'todos' ? '' : language)
          )
        : filter === 'tutorials'
        ? tutorials.courses.filter((dato) =>
            dato.name
              .toLowerCase()
              .includes(language === 'todos' ? '' : language)
          )
        : certifications.courses.filter((dato) =>
            dato.name
              .toLowerCase()
              .includes(language === 'todos' ? '' : language)
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
    const newResult = result.filter((dato) =>
      dato.name
        .toLowerCase()
        .includes(
          ` ${event.search.toLowerCase()}` || ` ${event.search.toLowerCase()} `
        )
    );

    setResult(newResult);
    isFiltered.current = true;
    resetField('search');
  };

  return (
    <>
      <div className='bg-gray-400 mb-8 py-2'>
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
      ) : result.length === 0 && isFiltered.current === true ? (
        <ErrorMessage text={translations.noSearch} />
      ) : (
        <>
          {filter === 'courses' && <CoursesCard courses={sortByTime(result)} />}
          {filter === 'tutorials' && <CoursesCard courses={result} />}
          {filter === 'certifications' && <CoursesCard courses={result} />}
        </>
      )}
    </>
  );
};

export default Explore;
