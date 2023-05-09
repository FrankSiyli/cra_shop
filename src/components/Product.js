import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./store/cartSlice";
import { getProducts } from "./store/productSlice";
import { uid } from "uid";

export default function Product() {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);

  useEffect(() => {
    // fetch("https://fakestoreapi.com/products")
    //.then((res) => res.json())
    //.then((json) => getProducts(json));
    dispatch(getProducts());
  }, []);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Failed to load data</div>;
  }

  const addToCard = (product) => {
    dispatch(add(product));
  };

  const cards = products.map((product) => (
    <div className="col-md-3" style={{ marginBottom: "10px" }}>
      <Card key={product.id} className="h-100">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "auto", marginTop: "10px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description.substring(0, 40)}...</Card.Text>
          <Card.Text>{product.price}€</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="primary" onClick={() => addToCard(product)}>
            Add to cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <div className="row" key={uid}>
        {cards}
      </div>
    </>
  );
}
