import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import customFetch from "../utils/customFetch";
import { useParams } from "react-router-dom";
/* import productsApi from './productsApi'; */
import Loading from "./Loading";
import { Alert, Box, Button } from "@mui/material";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState(3);
  const { category } = useParams();

  useEffect(() => {
    if (!category) {
      const data = fetch(
        `https://62e246abe8ad6b66d856e6b5.mockapi.io/api/coder/allcloths?page=1&limit=${pagination}`
      );
      customFetch(data)
        .then((response) => response.json())
        .then((result) => {
          setProducts(result.filter((f) => f.stock >= 1));
          setLoading(false);
        })
        .catch((err) => console.error(err));
    } else {
      const data = fetch(
        "https://62e246abe8ad6b66d856e6b5.mockapi.io/api/coder/allcloths"
      );
      customFetch(data)
        .then((response) => response.json())
        .then((result) => {
          const filterPerCategory = result.filter(
            (f) => f.category === category
          );
          setProducts(filterPerCategory);
          setLoading(false);
        })
        .catch((err) => console.error(err));
    }
  }, [category, pagination]);

  return loading ? (
    <Loading />
  ) : products.length > 0 ? (
    <>
      <img width="100%" src="/images/springfield/spring.jpg" alt="product" />
      <Box mt={3} />
      <ItemList products={products} />
      <Button
        disabled={pagination > products.length}
        onClick={() => setPagination(pagination + 3)}
      >
        Ver más productos
      </Button>
    </>
  ) : (
    <Alert variant="filled" severity="info" >No hay productos</Alert>
  );
};

export default ItemListContainer;
