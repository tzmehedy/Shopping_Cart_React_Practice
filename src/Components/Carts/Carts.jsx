import React from 'react';
import Cart from '../Cart/Cart'

const Carts = ({carts}) => {
    return (
      <div>
        <div className="flex justify-between">
          <h1>Name</h1>
          <h1>Price</h1>
        </div>
        {carts.map((cart) => (
          <Cart cart={cart}></Cart>
        ))}
      </div>
    );
};

export default Carts;