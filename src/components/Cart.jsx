import { Typography, Paper, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const Cart = () => {
  const test = useContext(CartContext);
  const [cartProducts, setCartProducts] = useState();

  useEffect(() => {
    setCartProducts(test.cartList);

  }, []);



  const deleteItemFromCard = (c, id) => {
    const deleteItemProd = c && c.filter((f) => f.id !== id);
    setCartProducts(deleteItemProd);
  };

  const deleteAll = () => {
    setCartProducts([]);
  };


  return (
    <div>
      <Typography variant="h1" color="secondary">
        Cart
      </Typography>
      {cartProducts &&
        cartProducts.map((c, index) => (
          <Paper
            key={index}
            elevation={3}
            style={{
              padding: "24px",
              marginBottom: "12px",
              display: "flex",
              gap: "20px",
            }}
          >
            {/* <img width="85px" src={c.images[0].image} alt="pimage" /> */}
            <div>
              <strong>Nombre de producto:</strong> {c.title}
            </div>
            <div>
              <strong>Descripción:</strong> {c.description}
            </div>
            <div>
              <strong>Cantidad:</strong> {c.qty}
            </div>
            <Button onClick={() => deleteItemFromCard(cartProducts, c.id)}>
              Delete
            </Button>
          </Paper>
        ))}
      <Button variant="contained" onClick={deleteAll}>
        Borrar todo
      </Button>
    </div>
  );
};

export default Cart;
