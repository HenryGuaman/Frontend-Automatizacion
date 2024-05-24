import React from 'react'
import IncidentForm from '../components/IncidentForm'
import IncidentList from '../components/IncidentList'
import PendingIncidentsList from '../components/PendingIncidentsList'
import RegisterAttention from '../components/RegisterAttention'
import MyIncidentsList from '../components/MyIncidentsList'

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { HeaderNav } from '../layout/HeaderNav'
import { Footer } from '../layout/Footer'

export const MisRutas = () => {
  return (
    <BrowserRouter>
    {/* HEADER Y NAVEGACION */}
    <HeaderNav />
            {/* CONTENIDO CNETRAL */}
            <section className='content'>
        <Routes>
          <Route path='/' element={<Navigate to="/inicio" />} />
          <Route path="/inicio" element={<IncidentForm />} />
          <Route path="/incidentes" element={<IncidentList />} />
          <Route path="/pendientes" element={<PendingIncidentsList />} />
          <Route path="/atencion/:id" element={<RegisterAttention />} />
          <Route path="/mis-incidentes" element={<MyIncidentsList />} />
          <Route path='*' element={
                        <div className='page'>
                            <h1 className='heading'>Error 404</h1>
                        </div>} />
        </Routes>
      </section>
      {/* FOOTER */}
      <Footer />
    </BrowserRouter>
  )
}
