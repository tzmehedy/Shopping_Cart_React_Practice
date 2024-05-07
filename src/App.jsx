import './App.css'
import Products from './Components/Products/Products'
import Carts from './Components/Carts/Carts'
import { useState } from 'react'

function App() {

  const [carts,setCarts] = useState([]);
  
  const handleCart = (cartProducts) =>{
    setCarts([...carts,cartProducts]);
  }

 
  return (
    <>
      <div className="container mx-auto flex mt-10 space-x-10">
        <div className="w-2/3">
          <Products handleCart={handleCart}></Products>
        </div>
        <div className="w-1/3">
          <Carts carts={carts}></Carts>
        </div>
      </div>
    </>
  );
}

export default App
