import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Courses from '../components/Courses';
import Model from '../components/Model';
import Home from '../components/Home';
import Course from '../components/Course';
import Donation from '../components/Donation';

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
          path='*'
          element={<Navigate to='/' />}
        />
      </Routes>
    </>
  );
};

export default Rutas;
