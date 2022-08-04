import React, { useEffect, useState, useContext } from "react";
import { Typography, Paper, Button, Grid, Divider, Alert, Box } from "@mui/material";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import { collection, doc, increment, serverTimestamp, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";

const Cart = () => {
  const test = useContext(CartContext);
  const [cartProducts, setCartProducts] = useState();
  const [totalWithTax, setTotalWithTax] = useState();
  
  useEffect(() => {
    setCartProducts(test.cartList);

    const caclTotalWithTaxes = test.calculateTax();
    setTotalWithTax(caclTotalWithTaxes)

  }, [test.cartList]);

  const removeItem = (c, id) => {
    test.deleteItemFromCard(c, id)
  };

  const deleteAll = () => {
    test.deleteAll()
  };

  //Send order to firestore in orders collection
  const handleCheckout = () => {

    let itemCartForDataBase = test.cartList.map(item => ({
      id: item.id,
      title: item.title,
      price: item.price,
      qty: item.qty,
      total: item.price * item.qty,
    }))
    
    let createOrder = {
      buyer: {
        email: "oscarfdez@gmail.com",
        name: "Oscar",
        phoneNumber: 123456789,
      },
      date: serverTimestamp(),
      items: itemCartForDataBase,
      total: totalWithTax,
    }

    const createOrderInFirestore = async () => {
      const newOrderRef = doc(collection(db, "orders"))
      await setDoc(newOrderRef, createOrder)
      return newOrderRef
    }
    
    createOrderInFirestore()
      .then((result) => alert("Your oreder has been created. ID: " + result.id))
      .catch((err) => console.log(err))

    test.cartList.forEach(async (item) => {
      const itemReference = doc(db, "products", item.id)
      await updateDoc(itemReference, {
        stock: increment(-item.qty)
      })
    })

    const deleteAllItemsCart = () => {
      test.deleteAll()
    }
    deleteAllItemsCart()

  }


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
                <img width="85px" src={c.images[0]} alt="pimage" />
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
                  <strong>Total:</strong> {c.total.toFixed(2)}€
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
            <Typography variant="body1">{m.title} ~ qty: x{m.qty} ~ Total:{m.total.toFixed(2)}€</Typography>
            <Divider/>
            </li>
          ))}
          </ul>
          {test.cartList.length > 0 && (
            <>
            <Box mt={3}/>
            <Typography variant="subtitle1">Subtotal: {test.totalItemPrice().toFixed(2)}€</Typography>
            <Typography variant="subtitle1">IVA: {test.calculateTax().toFixed(2)}€</Typography>
            <Typography variant="subtitle1" fontWeight={"bold"}>Total: {test.caclulateTotalWithTaxes().toFixed(2)}€</Typography>
            </>
          )}
        </Paper>
        <Button 
          variant="contained"
          color="secondary"
          fullWidth
          onClick={handleCheckout}
          >
            PAGAR
          </Button>
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
