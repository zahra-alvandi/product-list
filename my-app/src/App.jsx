import { useState } from 'react'
import './App.css'
import Product from './Products/products'
import Cart from './Cart/cart'

function App() {

  return (
    <div className='container'>
      <Product></Product>
      <Cart></Cart>
    </div>
  )
}

export default App
