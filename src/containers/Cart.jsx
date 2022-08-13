import React, { useEffect, useState, useContext } from 'react'
import Button from '../components/buttons/Button'
import NoProducts from './NoProducts'
import { CartContext } from '../contexts/CartContext'
import { useNavigate } from 'react-router-dom'
import {
  collection,
  doc,
  increment,
  serverTimestamp,
  setDoc,
  updateDoc,
} from 'firebase/firestore'
import { db } from '../utils/firebaseConfig'
import CartTable from '../components/CartTable'

const Cart = () => {
  const test = useContext(CartContext)
  const navigate = useNavigate()
  const [cartProducts, setCartProducts] = useState()
  const [totalWithTax, setTotalWithTax] = useState()

  useEffect(() => {
    setCartProducts(test.cartList)

    const caclTotalWithTaxes = test.calculateTax()
    setTotalWithTax(caclTotalWithTaxes)
  }, [test.cartList])

  const removeItem = (c, id) => {
    test.deleteItemFromCard(c, id)
  }

  const deleteAll = () => {
    test.deleteAll()
  }

  //Send order to firestore in orders collection
  const handleCheckout = () => {
    let itemCartForDataBase = test.cartList.map((item) => ({
      id: item.id,
      title: item.title,
      price: item.price,
      qty: item.qty,
      total: item.price * item.qty,
    }))

    let createOrder = {
      buyer: {
        email: 'oscarfdez@gmail.com',
        name: 'Oscar',
        phoneNumber: 123456789,
      },
      date: serverTimestamp(),
      items: itemCartForDataBase,
      total: totalWithTax,
    }

    const createOrderInFirestore = async () => {
      const newOrderRef = doc(collection(db, 'orders'))
      await setDoc(newOrderRef, createOrder)
      return newOrderRef
    }

    createOrderInFirestore()
      .then((result) => alert('Tu pedido ha sido enviado. ID: ' + result.id))
      .catch((err) => console.log(err))

    test.cartList.forEach(async (item) => {
      const itemReference = doc(db, 'products', item.id)
      await updateDoc(itemReference, {
        stock: increment(-item.qty),
      })
    })

    const deleteAllItemsCart = () => {
      test.deleteAll()
    }

    deleteAllItemsCart()
  }

  return (
    <>
      {test.cartList.length > 0 ? (
        <div className="c-container grid cart">
          <div className="col-8 col-xss-4 col-xs-6 col-sm-4 col-md-10 col-xl-8">
            <div className="grid">
              {cartProducts &&
                cartProducts.map((c, index) => (
                  <div className="col-12 col-xss-4 col-xs-6 col-sm-8 col-md-10 col-xl-12">
                    <CartTable
                      key={index}
                      c={c}
                      handleDelete={() => removeItem(cartProducts, c.id)}
                    />
                  </div>
                ))}
            </div>
            <div className="col-8 col-xss-4 col-xs-6 col-sm-8 col-md-10 col-xl-8">
              <Button className="cButton cButton-outlined" onClick={deleteAll}>
                Borrar todo
              </Button>
            </div>
          </div>
          <div className="col-4 col-xxs-4 col-xs-6 col-sm-8 col-md-10 col-xl-4">
            <div className="cart_breakdown">
              <h4 variant="h6">Desglose</h4>
              <hr />
              <ul style={{ paddingLeft: '20px' }}>
                {cartProducts &&
                  cartProducts.map((m, index) => (
                    <li key={index}>
                      <p variant="body1">
                        {m.title} ~ x {m.qty} ~ Total: {m.total.toFixed(2)}€
                      </p>
                      <hr />
                    </li>
                  ))}
              </ul>
              <div className="cart_breakdown-total">
                <p>Subtotal: {test.totalItemPrice().toFixed(2)}€</p>
                <p>IVA: {test.calculateTax().toFixed(2)}€</p>
                <p>Total: {test.caclulateTotalWithTaxes().toFixed(2)}€</p>
                <Button
                  className="cButton cButton-primary cButton-fullwidth"
                  onClick={handleCheckout}
                >
                  PAGAR
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <NoProducts
          alert="Puedes revisar la información de tus pedido en Mis Pedidos"
          title="Buscar productos"
        />
      )}
    </>
  )
}

export default Cart
