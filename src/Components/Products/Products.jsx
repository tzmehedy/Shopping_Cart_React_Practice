import { useEffect } from "react";
import { useState } from "react";
import Product from "../Product/Product";



const Products = ({ handleCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("./fakedata.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-10">
      {products.map((product) => (
        <Product
          product={product}
          key={product.id}
          handleCart={handleCart}
        ></Product>
      ))}
    </div>
  );
};

export default Products;