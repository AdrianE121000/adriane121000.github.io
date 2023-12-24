import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export function useAllCoursesFetch() {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState();
  const loading = useRef(false);
  const [fetchDone, setFetchDone] = useState(false);

  useEffect(() => {
    loading.current = true;
    if (fetchDone) {
      setTimeout(() => {
        fetch('https://adriane121000.github.io/courses.json')
          .then((res) => res.json())
          .then((json) => {
            setCourses(json.courses);
          })
          .catch((error) => setError(error))
          .finally(() => (loading.current = false));
      }, 3000);
    }
  }, [fetchDone]);

  return { courses, error, loading, setFetchDone };
}
