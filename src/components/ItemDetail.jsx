import React, { useState, useContext } from "react";
import Button from "@mui/material/Button";
import { Typography, Divider, Box, Grid } from "@mui/material";
import ItemCounter from "./ItemCounter";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { collection, doc, increment, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";

const ItemDetail = ({ product, stock = product.stock, initial = 0 }) => {
  const [counter, setCounter] = useState(initial);
  const [totalPrice, setTotalPrice] = useState(product.price);
  const [totalStock, setTotalStock] = useState(stock);
  const {id} = useParams()
  const test = useContext(CartContext);

  // onClick subtract products
  const subtract = () => {
    setCounter(counter - 1);
    const resultRest = totalPrice - product.price;
    setTotalPrice(resultRest);
  };

  // onClick add products
  const onAdd = () => {
    if (counter < totalStock) {
      setCounter(counter + 1);
    }
  };

  // onClick buy products
  const onBuy = (qty, id) => {

    setTotalStock(totalStock - qty);

    const result = counter * product.price;
    
    setTotalPrice(result);

    test.addToCart(product, qty, result);

    test.calcQuantity()

    if (totalStock < 1) {
      setCounter(0);
    } else {
      setCounter(initial);
    }

  };
  console.log(counter);
  console.log(totalStock);
  console.log(product);
  console.log(test.cartList);
  return (
    <div className="itemDetail">
      <Box my={3} />
      <Grid container spacing={3}>
        <Grid item xs={12} md={9}>
          <div className="itemDetailGrid">
            <div className="itemDetailGrid__images">
              {product &&
                product.images.map(( i, index) => (
                  <div key={index}>
                    <img width="100%" src={i} alt="ItemDetailImage" />
                    </div>
                  ))}
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div className="itemDetailInfo">
            <div className="itemDetailInfo__title">
              <Typography variant="h6">{product.title}</Typography>
            </div>
            <div className="itemDetailInfo__price">
              <Typography variant="h6">{product.price}€</Typography>
            </div>
            <div className="itemDetailInfo__price">
              <Typography variant="body2">{product.description}</Typography>
            </div>
            <Divider />
            <>
                  {/* Muestra btn de comprar */}
                  <ItemCounter
                    counter={counter}
                    subtract={subtract}
                    onAdd={onAdd}
                    isDisabledAdd={
                      (stock === 0 && true) || (counter === totalStock && true)
                    }
                    isDisabledSubtract={
                      (counter >= totalStock && false) ||
                      (counter === 0 && true)
                    }
                  />
                  <Button
                    variant="outlined"
                    color="primary"
                    fullWidth
                    onClick={() => onBuy(counter, product.id)}
                    disabled={totalStock === 0}
                  >
                    Añadir a la cesta
                  </Button>
                  {totalStock < stock && (
                    <Button variant="contained" color="secondary">
                    <Link to={"/cart"}>Ver cesta</Link>
                  </Button>
                  )}
            </>
            <div className="itemDetailInfo__stock">
              <Typography align="center" variant="caption">
                Quedan {totalStock} en stock.
              </Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ItemDetail;
