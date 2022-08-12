import React, { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import Loading from './Loading'
import { useParams } from 'react-router-dom'
import { getItemDataFromFirestore } from '../utils/getDataFirestore'

const ItemDetailContainer = () => {
  const { id } = useParams()
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getItemDataFromFirestore(id, 'products')
      .then((result) => {
        setProduct(result)
        setLoading(false)
      })
      .catch((err) => console.log(err))
  }, [id])

  return loading ? <Loading /> : <ItemDetail product={product} />
}

export default ItemDetailContainer
