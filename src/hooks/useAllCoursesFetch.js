import { useEffect } from 'react';
import { useState } from 'react';

export function useAllCoursesFetch() {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    fetch('http://localhost:5173/learnDeals/courses.json')
      .then((res) => res.json())
      .then((json) => {
        setCourses(json.courses);
      })
      .catch((error) => setError(error));
  }, []);

  return { courses, error };
}
