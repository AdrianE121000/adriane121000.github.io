import { useEffect, useState } from 'react';

export function useCourseFetch(key) {
  const [course, setCourse] = useState({});
  const [error, setError] = useState();

  useEffect(() => {
    fetch(`https://udecors.azurewebsites.net/courses/${key}`)
      .then((res) => res.json())
      .then((json) => {
        setCourse(json);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  const imgCourse = `https://udecors.azurewebsites.net/image/${course.image_id}`;

  return { course, error, imgCourse };
}
