import React, { useState} from "react";
import { Grid, Alert } from "@mui/material";
import CardItem from "./CardItem";

const ItemList = ({products}) => {
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState(false);

  // OnAdd btn to show alert message products added
  const onAdd = (counter) => {
    setAlert(true);
    setAlertMessage(counter);

    // Delete alert message
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  };

  return (
    <div>
        <Grid container spacing={3}>
          {products.map((p, index) => (
            <Grid key={index} item xs={12} sm={6} md={3}>
              <CardItem
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
              <Alert severity="success">
                Has añadido {alertMessage} productos
              </Alert>
            )}
          </Grid>
        </Grid>
    </div>
  );
};

export default ItemList;
