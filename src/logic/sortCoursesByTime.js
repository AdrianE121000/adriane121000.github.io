export function sortByTime(courses) {
  const sortedCourses = courses.sort(function (a, b) {
    let dateA = new Date(a.last_update_date);
    let dateB = new Date(b.last_update_date);

    return dateB - dateA;
  });

  return sortedCourses;
}
