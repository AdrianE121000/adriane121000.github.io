import { useEffect } from 'react';
import { useState } from 'react';

export function useAllCoursesFetch() {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    setTimeout(() => {
      fetch('https://adriane121000.github.io/learnDeals/courses.json')
        .then((res) => res.json())
        .then((json) => {
          setCourses(json.courses);
        })
        .catch((error) => setError(error));
    }, 3000);
  }, []);

  return { courses, error };
}
