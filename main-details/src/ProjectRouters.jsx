import React from 'react';
import { Routes, Route } from "react-router-dom";
import ServiceList from './Components/ServiceList';
import SingleService from './Components/SingleService';


export default function ProjectRouters() {

  return (
       <Routes>
          <Route path="" element={<ServiceList />} />
          <Route path='/:id/details' element={<SingleService />} />
        </Routes>
  )
}
