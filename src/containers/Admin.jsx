import React from "react";
import { TextField, Select, MenuItem, } from "@mui/material";
import Button from "../components/buttons/Button";
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
    <div className="c-container grid" style={{padding: "5rem 0"}}>
      <div className="col-4 col-xl-4 col-md-4 col-sm-4 col-xs-6">
      <TextField
              id="title"
              name="title"
              variant="outlined"
              fullWidth
              placeholder="Product Name"
              onChange={(e) => setTitle(e.target.value)}
              value={title || ""}
            />
      </div>
      <div className="col-4 col-xl-4 col-md-4 col-sm-4 col-xs-6">
      <TextField
              id="description"
              name="description"
              fullWidth
              variant="outlined"
              placeholder="Product Description"
              onChange={(e) => setDescription(e.target.value)}
              value={description || ""}
            />
      </div>
      <div className="col-4 col-xl-4 col-md-4 col-sm-4 col-xs-6">
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
      </div>
      <div className="col-4 col-xl-4 col-md-4 col-sm-4 col-xs-6">
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
      </div>
      <div className="col-4 col-xl-4 col-md-4 col-sm-4 col-xs-6">
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
      </div>
      <div className="col-4 col-xl-4 col-md-4 col-sm-4 col-xs-6">
            <Button onClick={enviar} className="cButton cButton-primary">Enviar</Button>
      </div>
    </div>
  );
};

export default Admin;
