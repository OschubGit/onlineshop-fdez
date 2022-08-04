import React from "react";
import { Grid } from "@mui/material";
import CardItem from "./CardItem";

const ItemList = ({products}) => {

  return (
    <div>
        <Grid container spacing={3}>
          {products && products.map((p, index) => (
            <Grid key={index} item xs={12} sm={6} md={3}>
              <CardItem
                product={p}
                stock={p.stock}
                price={p.price}
                />
            </Grid>
          ))}
        </Grid>
    </div>
  );
};

export default ItemList;
