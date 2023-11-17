import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About';
import Vans from './pages/Vans/Vans';
import VanDetail from './pages/Vans/VanDetail';
import Layout from './components/Layout';
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import HostLayout from './components/HostLayout';
import HostVans from './pages/Host/HostVans';
import HostVansInfo from './pages/Host/HostVansInfo';
import HostVansDetailLayout from './components/HostVansDetailLayout';

import './server'
import HostVansDetailPrice from './pages/Host/HostVansDetailPrice';
import HostVansDetailPhotos from './pages/Host/HostVansDetailPhotos';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='vans' element={<Vans />} />
          <Route path='vans/:id' element={<VanDetail />} />
          <Route path='login' element={<Login/>} />

          <Route path='host' element={<HostLayout />}>
            <Route index element={ <Dashboard/>}/>
            <Route path='income' element={<Income />} />
            <Route path='reviews' element={<Reviews />} />
            <Route path='vans' element={<HostVans/>}/>
            <Route path='vans/:id' element={<HostVansDetailLayout/>}>
              <Route index element={<HostVansInfo />} />
              <Route path='price' element={<HostVansDetailPrice />} />
              <Route path='photos' element={<HostVansDetailPhotos/>}/>
            </Route>
          </Route>
          <Route path='*' element={<NotFound/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
