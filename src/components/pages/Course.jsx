import { useContext } from 'react';
//import { useParams } from 'react-router-dom';
import { LanguageContext } from '../../context/LanguageContext';
import { useCourseFetch } from '../../hooks/useCourseFetch';
import { CourseSkeleton } from '../utils/skeletons';
import CourseCard from '../cards/CourseCard';
import ErrorMessage from '../utils/ErrorMessage';
import SEO from '@americanexpress/react-seo';

const Course = () => {
  const { translations } = useContext(LanguageContext);

  //const { key } = useParams();

  const { course, error, imgCourse, loading } = useCourseFetch();

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
            description={`Course: ${course.name} from learnDeals`}
            siteUrl='https://adriane121000.github.io/learnDeals/course/'
            image={{
              src: 'https://udecors.azurewebsites.net/image/400',
            }}
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
