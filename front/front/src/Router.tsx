import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Index from './pages/Index';
import Client from './pages/Client';

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/clientes/:id' element={<Client />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router;