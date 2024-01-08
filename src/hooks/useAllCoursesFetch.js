import { useRef, useEffect, useState } from 'react';

const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export function useAllCoursesFetch() {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState();
  const loading = useRef(false);
  const [fetchDone, setFetchDone] = useState(false);

  useEffect(() => {
    loading.current = true;
    if (fetchDone) {
      fetch(`${apiUrl}/courses`, {
        headers: {
          'Content-Type': 'application/json',
          'X-API_Key': apiKey,
        },
      })
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
