import React from 'react'
import Button from '../components/buttons/Button'
import { useState } from 'react'
import { categories } from '../utils/categories'
import { collection, doc, setDoc } from 'firebase/firestore'
import { db } from '../utils/firebaseConfig'
import Input from '../components/inputs/Input'
import InputSelect from '../components/inputs/InputSelect'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Admin = () => {
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [price, setPrice] = useState()
  const [stock, setStock] = useState()
  const [category, setCategory] = useState()
  const [additional, setAdditional] = useState()

  const showTostify = () => {
    toast('Wow so easy!')
  }

  const enviar = () => {
    let createProduct = {
      title: title,
      description: description,
      price: price,
      stock: parseInt(stock),
      category: category,
      additional: additional,
      images: [
        'https://static.zara.net/photos///2022/V/0/1/p/7521/630/622/2/w/1126/7521630622_1_1_1.jpg?ts=1653036167026',
        'https://static.zara.net/photos///2022/V/0/1/p/7521/630/622/2/w/1126/7521630622_1_1_1.jpg?ts=1653036167026',
        'https://static.zara.net/photos///2022/V/0/1/p/7521/630/622/2/w/1126/7521630622_1_1_1.jpg?ts=1653036167026',
        'https://static.zara.net/photos///2022/V/0/1/p/7521/630/622/2/w/1126/7521630622_1_1_1.jpg?ts=1653036167026',
      ],
    }

    const addProductToFirestore = async () => {
      const newOrder = doc(collection(db, 'products'))
      setDoc(newOrder, createProduct)
      return newOrder
    }

    addProductToFirestore()

    toast('Producto Creado correctamente')

    setTitle()
    setDescription()
    setPrice()
    setStock()
    setCategory()
    setAdditional()
  }

  return (
    <div className="c-container grid" style={{ padding: '5rem 0' }}>
      <div className="col-4 col-xl-4 col-md-4 col-sm-4 col-xs-6">
        <Input
          id="title"
          name="title"
          type="text"
          placeholder="Product Name"
          className={'input fulldwith'}
          onChange={(e) => setTitle(e.target.value)}
          value={title || ''}
        />
      </div>
      <div className="col-4 col-xl-4 col-md-4 col-sm-4 col-xs-6">
        <Input
          id="description"
          name="description"
          type="text"
          className={'input fulldwith'}
          placeholder="Descripción"
          onChange={(e) => setDescription(e.target.value)}
          value={description || ''}
        />
      </div>
      <div className="col-4 col-xl-4 col-md-4 col-sm-4 col-xs-6">
        <InputSelect
          id="category"
          name="category"
          className="fulldwith"
          onChange={(e) => setCategory(e.target.value)}
          value={category || ''}
        >
          <option value="" selected="selected" disabled="disabled">
            Selecciona categoría
          </option>
          {categories.map((c, index) => (
            <option key={index} value={c.category}>
              {c.category}
            </option>
          ))}
        </InputSelect>
      </div>
      <div className="col-4 col-xl-4 col-md-4 col-sm-4 col-xs-6">
        <Input
          id="stock"
          name="stock"
          type="number"
          className={'input fulldwith'}
          placeholder="Stock"
          onChange={(e) => setStock(e.target.value)}
          value={stock || ''}
        />
      </div>
      <div className="col-4 col-xl-4 col-md-4 col-sm-4 col-xs-6">
        <Input
          id="price"
          name="price"
          type="number"
          className={'input fulldwith'}
          placeholder="Precio"
          onChange={(e) => setPrice(e.target.value)}
          value={price || ''}
        />
      </div>
      <div className="col-4 col-xl-4 col-md-4 col-sm-4 col-xs-6">
        <Input
          id="materiales"
          name="materiales"
          type="text"
          className={'input fulldwith'}
          placeholder="Adicional"
          onChange={(e) => setAdditional(e.target.value)}
          value={additional || ''}
        />
      </div>
      <div className="col-4 col-xl-4 col-md-4 col-sm-4 col-xs-6">
        <Button onClick={enviar} className="cButton cButton-primary">
          Enviar
        </Button>
      </div>
      <div>
        <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  )
}

export default Admin
