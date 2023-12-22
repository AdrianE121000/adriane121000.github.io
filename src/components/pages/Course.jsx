import { useContext } from 'react';
//import { useParams } from 'react-router-dom';
import { LanguageContext } from '../../context/LanguageContext';
import { useCourseFetch } from '../../hooks/useCourseFetch';
import { CourseSkeleton } from '../utils/skeletons';
import CourseCard from '../cards/CourseCard';
import ErrorMessage from '../utils/ErrorMessage';
import { Helmet } from 'react-helmet';

const Course = () => {
  const { translations } = useContext(LanguageContext);

  //const { key } = useParams();

  const { course, error, imgCourse, loading } = useCourseFetch();

  return (
    <>
      {loading.current ? (
        <>
          <Helmet>
            <title>loading...</title>
          </Helmet>
          <CourseSkeleton />
        </>
      ) : error != undefined ? (
        <ErrorMessage text={translations.noFetch2} />
      ) : (
        <>
          <Helmet>
            <title>learnDeals | Course | {course.name}</title>
            <meta
              name='description'
              content={`Course ${course.name} from learnDeals`}
            />
            <meta
              property='og:image'
              content='https://udecors.azurewebsites.net/image/400'
            />
          </Helmet>
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
