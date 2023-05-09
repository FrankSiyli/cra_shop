import { useState, useEffect } from "react";

const Product = () => {
  const [products, getProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => getProducts(json));
  }, []);

  return (
    <>
      <h1>Product</h1>
      {JSON.stringify(products)}
    </>
  );
};

export default Product;
