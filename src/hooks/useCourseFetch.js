import { useEffect, useState } from 'react';
import { useRef } from 'react';

export function useCourseFetch(key) {
  const [course, setCourse] = useState({});
  const [error, setError] = useState();
  const loading = useRef(true);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${apiUrl}/course/${key}`)
      .then((res) => res.json())
      .then((json) => {
        setCourse(json.course);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => (loading.current = false));
  }, [key]);

  const imgCourse = `${apiUrl}/image/${course.image_id}`;

  return { course, error, imgCourse, loading };
}
