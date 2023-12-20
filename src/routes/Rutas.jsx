import { Navigate, Route, Routes } from 'react-router-dom';
import Courses from '../components/pages/Courses';
import Model from '../components/utils/Model';
import Home from '../components/pages/Home';
import Course from '../components/pages/Course';
import Donation from '../components/pages/Donation';
import PrivacyPolicy from '../components/privacy/PrivacyPolicy';

const Rutas = () => {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/courses'
          element={<Courses />}
        />
        <Route
          path='/cat/:category'
          element={<Model />}
        />
        <Route
          path='/course/:key'
          element={<Course />}
        />
        <Route
          path='/donation'
          element={<Donation />}
        />
        <Route
          path='/privacy'
          element={<PrivacyPolicy />}
        />
        <Route
          path='*'
          element={<Navigate to='/' />}
        />
      </Routes>
    </>
  );
};

export default Rutas;
