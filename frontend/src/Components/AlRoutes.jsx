import React from 'react';
import {Routes, Route} from "react-router-dom";
import Home from '../Pages/Home/Home';
const AlRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default AlRoutes;
