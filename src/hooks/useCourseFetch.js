import { useEffect, useState } from 'react';
//import img from '../assets/logo.ico';
import { useRef } from 'react';

const apiUrl = import.meta.env.VITE_API_URL;

export function useCourseFetch(key) {
  const [course, setCourse] = useState({});
  const [error, setError] = useState();
  const loading = useRef(true);

  useEffect(() => {
    setTimeout(() => {
      fetch(`${apiUrl}/courses/${key}`)
        .then((res) => res.json())
        .then((json) => {
          setCourse(json);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => (loading.current = false));
    }, 3000);
  }, [key]);

  const imgCourse = `${apiUrl}/image/${course.image_id}`;

  return { course, error, imgCourse, loading };
}
