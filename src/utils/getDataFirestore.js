import {
  collection,
  doc,
  getDocs,
  getDoc,
  query,
  where,
} from 'firebase/firestore'
import { db } from './firebaseConfig'

export const getDataFromFirebase = async (category) => {
  let resultProducts

  if (category) {
    resultProducts = query(
      collection(db, 'products'),
      where('category', '==', category)
    )
  } else {
    resultProducts = query(collection(db, 'products'))
  }

  const querySnapshot = await getDocs(resultProducts)
  const dataMapFirestore = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))

  return dataMapFirestore
}

export const getItemDataFromFirestore = async (id, firestoreDocument) => {
  const docRef = doc(db, firestoreDocument, id)
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    return { id: id, ...docSnap.data() }
  } else {
    console.log('No such document')
  }
}

export const getOrdersFromFirebase = async () => {
  let resultProducts
  resultProducts = query(collection(db, 'orders'))

  const querySnapshot = await getDocs(resultProducts)
  const dataMapFirestore = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))

  return dataMapFirestore
}
