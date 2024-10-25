import { useState } from 'react'
import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainLayout } from './Layout/MainLayout';
import { Products } from './pages/Products';
import { Home } from './pages/Home';
import { CartContextProvider } from './context/CartContext';

function App() {

  return (
    <>
    <CartContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='products' element={<Products />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </CartContextProvider>
    </>
  )
}

export default App
