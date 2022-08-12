import React from 'react'
import Button from './buttons/Button'

const CartTable = ({ c, handleDelete }) => {
  return (
    <div className="c-cartTable">
      <img width="85px" height="auto" src={c.images[0]} alt="pimage" />
      <div>
        <strong>Nombre de producto:</strong> {c.title}
      </div>
      <div>
        <strong>Cantidad:</strong> {c.qty}
      </div>
      <div>
        <strong>Total:</strong> {c.total.toFixed(2)}€
      </div>
      <Button className="cButton cButton-outlined" onClick={handleDelete}>
        Delete
      </Button>
    </div>
  )
}

export default CartTable
