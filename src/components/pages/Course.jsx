import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { LanguageContext } from '../../context/LanguageContext';
import { useCourseFetch } from '../../hooks/useCourseFetch';
import { CourseSkeleton } from '../utils/skeletons';
import CourseCard from '../cards/CourseCard';
import ErrorMessage from '../utils/ErrorMessage';

const Course = () => {
  const { translations } = useContext(LanguageContext);

  const { key } = useParams();

  const { course, error, imgCourse, loading } = useCourseFetch(key);

  return (
    <>
      {loading.current ? (
        <>
          <CourseSkeleton />
        </>
      ) : error != undefined ? (
        <ErrorMessage text={translations.noFetch2} />
      ) : (
        <>
          <CourseCard
            course={course}
            imgCourse={imgCourse}
          />
        </>
      )}
    </>
  );
};

export default Course;
