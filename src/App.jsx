import './App.css'
import Products from './Components/Products/Products'
import Cart from './Components/Cart/Cart'

function App() {
  

  return (
    <>
      <div className="container mx-auto flex">
        <div className='w-2/3'>
          <Products></Products>
        </div>
        <div className='w-1/3'>
          <Cart></Cart>
        </div>
      </div>
    </>
  );
}

export default App
