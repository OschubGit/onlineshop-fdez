import React from "react";
import { Grid } from "@mui/material";
import CardItem from "./CardItem";

const ItemList = ({products}) => {

  return (
    <div>
          <div className="grid_v5">
          {products && products.map((p, index) => (
              <CardItem
                key={index}
                product={p}
                stock={p.stock}
                price={p.price}
                />
          ))}
          </div>
    </div>
  );
};

export default ItemList;
