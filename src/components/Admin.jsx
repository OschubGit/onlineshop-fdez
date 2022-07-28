import React from "react";
import { Button, TextField, Select, MenuItem, Grid } from "@mui/material";
import { useState } from "react";
import { categories } from "../utils/categories";

const Admin = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [stock, setStock] = useState();
  const [category, setCategory] = useState();

  function aleatorio(inferior, superior) {
    var numPosibilidades = superior - inferior;
    var aleatorio = Math.random() * (numPosibilidades + 1);
    aleatorio = Math.floor(aleatorio);
    return inferior + aleatorio;
  }
  const enviar = (e) => {
    e.preventDefault();
    setTitle();

    fetch("https://62e246abe8ad6b66d856e6b5.mockapi.io/api/coder/allcloths", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,
        price: price,
        stock: stock,
        category: category,
        images: [
          {
            createdAt: "2018-07-27T17:36:25.297Z",
            image: "/images/springfield/pantalon_corto_lazo_1.jpeg",
            id: "10",
            clothingId: "10",
          },
          {
            createdAt: "2022-07-28T07:44:52.587Z",
            image: "/images/springfield/pantalon_corto_lazo_2.jpeg",
            id: "20",
            clothingId: "10",
          },
          {
            createdAt: "2022-07-27T12:15:21.937Z",
            image: "/images/springfield/pantalon_corto_lazo_3.jpeg",
            id: "30",
            clothingId: "10",
          },
          {
            createdAt: "2022-07-27T12:15:21.937Z",
            image: "/images/springfield/pantalon_corto_lazo_4.jpeg",
            id: "30",
            clothingId: "10",
          },
        ],
        comments: [
          {
            createdAt: "2018-07-27T13:58:36.673Z",
            name: "Triston",
            avatar:
              "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/928.jpg",
            rating: aleatorio(1, 5),
            id: "10",
            clothingId: "10",
          },
          {
            createdAt: "2022-07-27T23:58:53.172Z",
            name: "Noemie",
            avatar:
              "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/254.jpg",
            rating: aleatorio(1, 5),
            id: "20",
            clothingId: "10",
          },
          {
            createdAt: "2022-07-28T06:13:15.126Z",
            name: "Lemuel",
            avatar:
              "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/580.jpg",
            rating: aleatorio(1, 5),
            id: "30",
            clothingId: "10",
          },
          {
            createdAt: "2022-07-27T13:36:09.759Z",
            name: "Claud",
            avatar:
              "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/255.jpg",
            rating: aleatorio(1, 5),
            id: "40",
            clothingId: "10",
          },
        ],
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())

      setTitle()
      setDescription()
      setCategory()
      setStock()
      setPrice()
  };

  return (
    <div>
      <form onSubmit={enviar}>
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
          <Button size="large" variant="outlined" type="submit">
            Enviar
          </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Admin;
