import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import { Alert, Box, Button } from "@mui/material";
import { getDataFromFirebase } from "../utils/getDataFirestore";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState(3);
  const { category } = useParams();

  useEffect(() => {
      getDataFromFirebase(category)
      .then((result) => {
        setProducts(result);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [category]);

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
    <Alert variant="filled" severity="info">
      No hay productos
    </Alert>
  );
};

export default ItemListContainer;
