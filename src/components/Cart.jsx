import React, { useEffect, useState, useContext } from "react";
import { Typography, Paper, Button, Grid, Divider, Alert, Box } from "@mui/material";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const test = useContext(CartContext);
  const [cartProducts, setCartProducts] = useState();
  const [totalItems, setTotalItems] = useState();
  const [totalTax, setTotalTax] = useState();
  const [totalWithTax, setTotalWithTax] = useState();

  const initialValue = 0;
  const sumPrice = test.cartList.map((f) => f.total)
  const result = sumPrice.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);
  
  useEffect(() => {
    setCartProducts(test.cartList);
  
    setTotalItems(result)
  
    const calcTax = result * 0.21;
    setTotalTax(calcTax)

    const caclTotalWithTaxes = calcTax + result;
    setTotalWithTax(caclTotalWithTaxes)

  }, [test.cartList]);

  const removeItem = (c, id) => {
    test.deleteItemFromCard(c, id)
  };

  const deleteAll = () => {
    setCartProducts([]);
  };


  return (
    test.cartList.length > 0 ? (
    <Grid container spacing={3}>
      <Grid item xs={12}>
      <Typography variant="h1" color="secondary">
        Cart
      </Typography>
      </Grid>
      <Grid item xs={12} md={9}>
        <div>
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
                <img width="85px" src={c.images[0].image} alt="pimage" />
                <div>
                  <strong>Nombre de producto:</strong> {c.title}
                </div>
                <div>
                  <strong>Descripción:</strong> {c.description}
                </div>
                <div>
                  <strong>Cantidad:</strong> {c.qty}
                </div>
                <div>
                  <strong>Total:</strong> {c.total}€
                </div>
                <Button onClick={() => removeItem(cartProducts, c.id)}>
                  Delete
                </Button>
              </Paper>
            ))}
          <Button variant="contained" onClick={deleteAll}>
            Borrar todo
          </Button>
        </div>
      </Grid>
      <Grid item xs={12} md={3}>
        <Paper style={{padding: "20px"}}>
          <Typography variant="h6">Desglose</Typography>
          <Divider/>
          <Box mt={3}/>
          <ul style={{paddingLeft: "20px"}}>
          {cartProducts && cartProducts.map((m, index) => (
            <li key={index}>
            <Typography variant="body1">{m.title} ~ qty: x{m.qty} ~ Total:{m.total}€</Typography>
            <Divider/>
            </li>
          ))}
          </ul>
          {totalItems !== 0 && (
            <>
            <Box mt={3}/>
            <Typography variant="subtitle1">Subtotal: {totalItems && totalItems.toFixed(2)}€</Typography>
            <Typography variant="subtitle1">IVA: {totalTax && totalTax.toFixed(2)}€</Typography>
            <Typography variant="subtitle1" fontWeight={"bold"}>Total: {totalWithTax && totalWithTax.toFixed(2)}€</Typography>
            </>
          )}
        </Paper>
      </Grid>
    </Grid>
    ) : (
      <Alert severity="info" variant="filled">
        No hay productos en la cesta.<Link to={"/"}> Click aquí </Link> para ir a la página principal
      </Alert>
    )
  );
};

export default Cart;
