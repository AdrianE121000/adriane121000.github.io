import { useEffect, useState } from 'react';

export function useCourseFetch(key) {
  const [course, setCourse] = useState({});
  const [error, setError] = useState();

  useEffect(() => {
    fetch(`https://API_URL/courses/${key}`)
      .then((res) => res.json())
      .then((json) => {
        setCourse(json);
      })
      .catch((error) => {
        setError(error);
      });
  }, [key]);

  const imgCourse = `https://API_URL/image/${course.image_id}`;

  return { course, error, imgCourse };
}
