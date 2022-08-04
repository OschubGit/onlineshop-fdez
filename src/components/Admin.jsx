import React from "react";
import { Button, TextField, Select, MenuItem, Grid } from "@mui/material";
import { useState } from "react";
import { categories } from "../utils/categories";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";

const Admin = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [stock, setStock] = useState();
  const [category, setCategory] = useState();

  const enviar = () => {

    let createProduct = {
      title: title,
      description: description,
      price: price,
      stock: parseInt(stock),
      category: category,
      images: [
        "/images/springfield/pantalon_corto_lazo_1.jpeg",
        "/images/springfield/pantalon_corto_lazo_1.jpeg",
        "/images/springfield/pantalon_corto_lazo_1.jpeg",
        "/images/springfield/pantalon_corto_lazo_1.jpeg",
      ],
    };

    const addProductToFirestore = async () => {
      const newOrder = doc(collection(db, "products"));
      setDoc(newOrder, createProduct);
      return newOrder;
    };

    addProductToFirestore();

    setTitle()
    setDescription()
    setPrice()
    setStock()
    setCategory()
  };

  return (
    <div>
        <Grid container spacing={3}>
          <Grid item xs={12} md={2}>
            <TextField
              id="title"
              name="title"
              variant="outlined"
              fullWidth
              placeholder="Product Name"
              onChange={(e) => setTitle(e.target.value)}
              value={title || ""}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <TextField
              id="description"
              name="description"
              fullWidth
              variant="outlined"
              placeholder="Product Description"
              onChange={(e) => setDescription(e.target.value)}
              value={description || ""}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <Select
              id="category"
              name="category"
              label="category"
              fullWidth
              autoWidth={true}
              onChange={(e) => setCategory(e.target.value)}
              value={category || ""}
            >
              {categories.map((c, index) => (
                <MenuItem key={index} value={c.category}>
                  {c.category}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12} md={2}>
            <TextField
              id="stock"
              name="stock"
              type="number"
              fullWidth
              variant="outlined"
              placeholder="Stock"
              onChange={(e) => setStock(e.target.value)}
              value={stock || ""}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <TextField
              id="price"
              name="price"
              type="number"
              fullWidth
              variant="outlined"
              placeholder="Product Price"
              onChange={(e) => setPrice(e.target.value)}
              value={price || ""}
            />
          </Grid>
          <Grid item xs={12}>
            <Button size="large" variant="outlined" type="button" onClick={enviar}>
              Enviar
            </Button>
          </Grid>
        </Grid>
    </div>
  );
};

export default Admin;
