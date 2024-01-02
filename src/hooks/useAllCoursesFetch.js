import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export function useAllCoursesFetch() {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState();
  const loading = useRef(false);
  const [fetchDone, setFetchDone] = useState(false);
  const apiUrl = import.meta.env.VITE_API_URL;
  console.log(apiUrl);

  useEffect(() => {
    loading.current = true;
    if (fetchDone) {
      fetch(`${apiUrl}/courses`)
        .then((res) => res.json())
        .then((json) => {
          setCourses(json.courses);
        })
        .catch((error) => setError(error))
        .finally(() => (loading.current = false));
    }
  }, [fetchDone]);

  return { courses, error, loading, setFetchDone };
}
