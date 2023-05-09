import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { remove } from "./store/cartSlice";
import { uid } from "uid";

const Cart = () => {
  const dispatch = useDispatch();
  const removeToCard = (id) => {
    dispatch(remove({ id }));
  };

  const products = useSelector((state) => state.cart);
  const cards = products.map((product) => (
    <div className="col-md-5" style={{ marginBottom: "10px" }}>
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
          <Button variant="danger" onClick={() => removeToCard(product.id)}>
            Remove item
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
};

export default Cart;
