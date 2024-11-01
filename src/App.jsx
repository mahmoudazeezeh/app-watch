import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import Cart from './Components/Cart/Cart'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import Footer from './Components/Footer/Footer'
import AddProduct from './pages/AddProduct/AddProduct'
import Login from './Components/Login/Login'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App