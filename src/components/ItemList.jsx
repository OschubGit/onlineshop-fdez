import React, { useState } from "react";
import { Grid, Alert } from "@mui/material";
import productsApi from "./productsApi";
import CardCounter from "./CardCounter";
import Loading from "./Loading";

const ItemList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState(false);

  // Simulation status ok
  let simulationPromise = 200;

  let getProducts = (time, promiseData) => {
    return new Promise((resolve, reject) => {
      if (simulationPromise === 200) {
        setTimeout(() => {
          resolve(promiseData);
        }, time);
      } else {
        reject("Error al cargar productos");
      }
    });
  };

  // Get products from api
  getProducts(1000, productsApi)
    .then((data) => {
      setProducts(data);
    })
    .then(() => {
      setLoading(false);
    })
    .catch((err) => console.log(err));


  // OnAdd btn to show alert message products added
  const onAdd = (counter) => {
    setAlert(true)
    setAlertMessage(counter)

    // Delete alert message 
    setTimeout(() => {
      setAlert(false)
    },3000)
  }
  

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Grid container spacing={3}>
          {products.map((p, index) => (
            <Grid key={index} item xs={12} sm={6} md={3}>
              <CardCounter
                product={p}
                initial={0}
                stock={p.stock}
                price={p.price}
                onAdd={onAdd}
              />
            </Grid>
          ))}
          <Grid item xs={12}>
            {alert && (
              <Alert severity="success">Has añadido {alertMessage} productos</Alert>
            )}
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default ItemList;
