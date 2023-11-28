import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Courses from '../components/Courses';
import Model from '../components/Model';
import Search from '../components/Search';

const Rutas = () => {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<Courses />}
        />
        <Route
          path='/cat/:category'
          element={<Model />}
        />
        <Route
          path='/search'
          element={<Search />}
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
