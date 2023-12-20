import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
//import { useParams } from 'react-router-dom';
import { LanguageContext } from '../../context/LanguageContext';
//import { useCourseFetch } from '../../hooks/useCourseFetch';
import { useCourseTimeCalculate } from '../../hooks/useCourseTimeCalculate';
import Cookies from '../utils/Cookies';
import { CourseSkeleton } from '../utils/skeletons';
import Footer from '../utils/Footer';

import imgCourse from '../../assets/logo.ico';

const Course = () => {
  const { translations } = useContext(LanguageContext);
  const { calculateCourseTime } = useCourseTimeCalculate();
  //const { key } = useParams();
  const navigate = useNavigate();

  //const { course, error, imgCourse } = useCourseFetch(key);

  const error = undefined;

  const course = {
    name: 'Javascript Avanced Course',
    last_update_date: '2023-09-05T01:05:39.610865',
    category: 'development',
    language: 'English',
    url: 'https://www.udemy.com/course/javascript-basics-p',
    description:
      '<div tabindex="-1"><div data-purpose="safely-set-inner-html:description:description"><p>This Course is the demo course. You will learn about the entire system at the end of this course, and you will be able to<strong> know about the course in a concise description.</strong></p><p>This is the first lesson in the "Java from Zero to First Job" basic training course. It is designed for people who desire to learn programming from scratch, as stated in the course name. There is no prerequisite for this course other than knowing how to turn on a computer:) Lessons will cover the remaining material.</p><p><strong>Why is this JavaScript course the ideal one for you?</strong></p><p><em> this JavaScript course is the most comprehensive. It\'s a complete bundle that will take you from learning the very basics of JavaScript all the way up to creating sophisticated applications.</em></p><p>Modern JavaScript will be taught to you step-by-step from scratch. I\'ll walk you through useful and entertaining code examples, significant theory about how JavaScript actually functions, and stunning, finished creations.</p><p>You will gain a variety of practical skills that will help you in your developer profession, including how to think like a developer, how to plan application features, how to architect your code, how to debug code, and many other practical skills.</p><p>But… All of these subjects are not required to be covered. Because it is "The Complete JavaScript Course," this is a short course. Actually,<strong> it\'s like taking multiple classes at once! </strong>But even if you only watch a portion of the course, you can still become a fantastic developer. Because of this, I devised pathways to move you through the course more quickly and built this course in a fairly modular manner.</p><p><em>By the end of the course, you\'ll be equipped with the information and self-assurance you need to ace job interviews and advance to the level of professional developer.</em></p></div><div class="styles--audience--2xuzW" data-purpose="target-audience"><h2 class="ud-heading-xl styles--audience__title--1qhlO">Who this course is for:</h2><ul class="styles--audience__list--16EaN"><li>Those who are total newbies who want to learn how to create an expert, lovely, and responsive website</li><li>Students who have some familiarity with HTML and CSS but find it difficult to put together a fantastic website</li><li>HTML5 and CSS3 designers who want to broaden their skill set</li></ul></div></div>',
  };

  if (error != undefined) {
    return (
      <>
        <Cookies />
        <div className='flex justify-center items-center h-screen'>
          <div
            className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative'
            role='alert'>
            <strong className='font-bold'>Error: </strong>
            <span className='block sm:inline'>{translations.noFetch2}</span>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <Cookies />
      {course.name === undefined ? (
        <CourseSkeleton />
      ) : (
        <div className='max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6 m-4'>
          <div className='flex flex-col md:flex-row'>
            <div className='md:w-1/3 pr-6'>
              <img
                src={imgCourse}
                alt={course.name}
                className='w-full h-auto rounded-lg'
              />
            </div>
            <div className='md:w-2/3'>
              <h2 className='text-2xl md:text-3xl font-bold mb-2'>
                {course.name}
              </h2>
              <p className='text-lg md:text-xl text-gray-600 mb-2'>
                {translations.fecha}:{' '}
                {calculateCourseTime(course.last_update_date)}
              </p>
              <p className='text-lg md:text-xl text-gray-600 mb-2'>
                {translations.lenguaje}: {course.language}
              </p>
              <p className='text-lg md:text-xl text-gray-600 mb-2'>
                {translations.cat}: {course.category}
              </p>
            </div>
          </div>
          <div className='mt-4'>
            <p
              className='text-lg md:text-xl'
              dangerouslySetInnerHTML={{ __html: course.description }}
            />
          </div>
          <div className='flex justify-between mt-4'>
            <button
              onClick={() => navigate(-1)}
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center'>
              <span>{translations.volver}</span>
            </button>
            <a
              href={course.url}
              target='_blank'
              rel='noreferrer'
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center'>
              <span>{translations.ir}</span>
            </a>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Course;
