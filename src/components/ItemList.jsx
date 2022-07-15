import React, { useState } from "react";
import { Grid } from "@mui/material";
import productsApi from "./productsApi";
import Item from "./Item";
import Loading from "./Loading";

const ItemList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  let simulationPromise = 200;

  let prestamo = (time, promiseData) => {
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

  prestamo(2000, productsApi)
    .then((data) => {
      setProducts(data);
    })
    .then(() => {
      setLoading(false);
    })
    .catch((err) => console.log(err));

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Grid container spacing={3}>
          {products.map((p, index) => (
            <Grid key={index} item xs={12} md={3}>
              <Item
                title={p.title}
                image={p.image}
                description={p.description}
                category={p.category}
                price={p.price}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default ItemList;
