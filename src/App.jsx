// eslint-disable-next-line no-unused-vars
import React from 'react'
import NavBar from './components/NevBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Card from './pages/Cart/Card'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'

function App() {
  return (
    <>
      <div className='app'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/card' element={<Card />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>
      </div>
    </>
  )
}

export default App