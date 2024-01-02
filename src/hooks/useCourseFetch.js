import { useEffect, useState } from 'react';
import img from '../assets/logo.ico';
import { useRef } from 'react';

export function useCourseFetch(key) {
  const [course, setCourse] = useState({});
  const [error, setError] = useState();
  const loading = useRef(true);

  useEffect(() => {
    setTimeout(() => {
      fetch(`https://adriane121000.github.io/learnDeals/course.json`)
        .then((res) => res.json())
        .then((json) => {
          setCourse(json.course);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => (loading.current = false));
    }, 3000);
  }, [key]);

  const imgCourse = img;

  return { course, error, imgCourse, loading };
}
