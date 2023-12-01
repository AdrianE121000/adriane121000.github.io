import moment from 'moment-timezone';
import { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../context/LanguageContext';

export function useCourseTimeCalculate() {
  const { translations } = useContext(LanguageContext);
  const [dateDB, setDateDb] = useState('');

  useEffect(() => {
    const zonaHoraria = 'Europe/Berlin';
    const divider = 'T';

    const fechaHoraActual = moment()
      .tz(zonaHoraria)
      .format(`YYYY-MM-DD${divider}HH:mm:ss`);
    setDateDb(fechaHoraActual);
  }, []);

  const calculateDiff = (dateCourse) => {
    const date1 = new Date(dateDB);
    const date2 = new Date(dateCourse);

    let result = Math.abs(date1 - date2);

    let resultDiff = {};

    result = Math.floor(result / 1000);
    resultDiff.sec = result % 60;
    result = Math.floor((result - resultDiff.sec) / 60);
    resultDiff.min = result % 60;
    result = Math.floor((result - resultDiff.min) / 60);
    resultDiff.hours = result % 24;
    result = Math.floor((result - resultDiff.hours) / 24);
    resultDiff.days = result;

    return resultDiff;
  };

  const calculateCourseTime = (time) => {
    const courseTime = calculateDiff(time);

    let result = '';

    courseTime.days > 1
      ? (result = `${courseTime.days} ${translations.day}`)
      : courseTime.days === 1
      ? (result = `${courseTime.days} ${translations.days}`)
      : courseTime.hours > 0
      ? (result = `${courseTime.hours} ${translations.hours}`)
      : courseTime.min > 0
      ? (result = `${courseTime.min} ${translations.minutes}`)
      : (result = `${courseTime.sec} ${translations.second}`);

    return result;
  };

  return { calculateCourseTime };
}
