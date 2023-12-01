export function sortByTime(courses) {
  const sortedCourses = courses.sort((a, b) => {
    if (
      Number(
        a.last_update_date.slice(0, 4) +
          a.last_update_date.slice(5, 7) +
          a.last_update_date.slice(8, 10)
      ) <
      Number(
        b.last_update_date.slice(0, 4) +
          b.last_update_date.slice(5, 7) +
          b.last_update_date.slice(8, 10)
      )
    ) {
      return 1;
    }
    if (
      Number(
        a.last_update_date.slice(0, 4) +
          a.last_update_date.slice(5, 7) +
          a.last_update_date.slice(8, 10)
      ) >
      Number(
        b.last_update_date.slice(0, 4) +
          b.last_update_date.slice(5, 7) +
          b.last_update_date.slice(8, 10)
      )
    ) {
      return -1;
    }
    return 0;
  });

  return sortedCourses;
}
