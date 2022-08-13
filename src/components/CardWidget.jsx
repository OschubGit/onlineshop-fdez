import React, { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import { Link } from 'react-router-dom'
import { MdOutlineShoppingCart } from 'react-icons/md'

const CardWidget = () => {
  const test = useContext(CartContext)
  return (
    <Link to={'/cart'}>
      <div className="cartwidget">
        <span className="cartwidget_badge">{test.calcQuantity() || null}</span>
        <MdOutlineShoppingCart fontSize={'18px'} />
      </div>
    </Link>
  )
}

export default CardWidget
