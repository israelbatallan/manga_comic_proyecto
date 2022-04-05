import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, getDocs, query, where, collection, addDoc, Timestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmhp_aeOcxbn4uU-yYmFhziTTaXHFD3HE",
  authDomain: "manga-comic-proyecto.firebaseapp.com",
  projectId: "manga-comic-proyecto",
  storageBucket: "manga-comic-proyecto.appspot.com",
  messagingSenderId: "759902080919",
  appId: "1:759902080919:web:5e19002282bc3375ccfed2"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

export async function getItems() {

    const itemsCollection = collection(db, 'productos')

    const itemsSnapshot = await getDocs(itemsCollection)

    return itemsSnapshot.docs.map(item => {
      return { ...item.data(), id: item.id }
    })
  }

  export async function getItemsByCategory(category_id) {

    const itemsCollection = collection(db, 'productos')

    const categoryQuery = query(itemsCollection, where('category_id', '==', category_id))

    const itemsSnapshot = await getDocs(categoryQuery)

    return itemsSnapshot.docs.map(item => {
      return { ...item.data(), id: item.id }
    })
  }

  export async function getItem(id) {

    const itemsCollection = collection(db, 'productos')

    const docref = doc(itemsCollection, id)

    const itemSnapshot = await getDoc(docref)

    return { ...itemSnapshot.data(), id: itemSnapshot.id }
  }

  export async function submitOrder(order) {

    const date = Timestamp.now()

    const timestampedOrder = { ...order, date }

    const ordersCollection = collection(db, 'pedidos')

    const sentOrder = await addDoc(ordersCollection, timestampedOrder)

    return (sentOrder.id)
  }

  export async function getOrderById(id) {

    const ordersCollection = collection(db, 'pedidos')

    const docref = doc(ordersCollection, id)

    const orderSnapshot = await getDoc(docref)

    return orderSnapshot.data() && { ...orderSnapshot.data(), id: orderSnapshot.id }
}