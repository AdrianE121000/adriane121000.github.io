import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { LanguageContext } from '../../context/LanguageContext';
import { useCourseFetch } from '../../hooks/useCourseFetch';
import { CourseSkeleton } from '../utils/skeletons';
import CourseCard from '../cards/CourseCard';
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
          <SEO
            title={`learnDeals | Course | ${course.name}`}
            description={`Course: ${course.name}`}
            image={imgCourse}
            keywords={keywords}
          />
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
