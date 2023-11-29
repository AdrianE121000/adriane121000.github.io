import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Courses from '../components/Courses';
import Model from '../components/Model';
import Search from '../components/Search';
import Home from '../components/Home';

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
