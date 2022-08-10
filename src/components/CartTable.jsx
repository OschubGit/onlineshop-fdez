import React from 'react'
import {Paper, Button} from "@mui/material"

const CartTable = ({c, handleDelete}) => {
  return (
    <Paper
                elevation={3}
                style={{
                  padding: "24px",
                  marginBottom: "12px",
                  display: "flex",
                  gap: "20px",
                }}
              >
                <img width="85px" src={c.images[0]} alt="pimage" />
                <div>
                  <strong>Nombre de producto:</strong> {c.title}
                </div>
                <div>
                  <strong>Descripción:</strong> {c.description}
                </div>
                <div>
                  <strong>Cantidad:</strong> {c.qty}
                </div>
                <div>
                  <strong>Total:</strong> {c.total.toFixed(2)}€
                </div>
                <Button onClick={handleDelete}>
                  Delete
                </Button>
              </Paper>
  )
}

export default CartTable
