// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,collection, getDocs, getDoc, doc, query, where} from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyBLZihEOeF3MPBIL-k-8-bjZhJmxzjplIk",
  authDomain: "vanslife-21c1d.firebaseapp.com",
  projectId: "vanslife-21c1d",
  storageBucket: "vanslife-21c1d.appspot.com",
  messagingSenderId: "913455269583",
  appId: "1:913455269583:web:63e743e8dc4be619fed9ba",
  measurementId: "G-SN73XT6SN1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

// vans collection reference
const vansCollectionRef = collection(db, 'vans') 

export async function getVans() {
  const snapshot = await getDocs(vansCollectionRef)

  const vans = snapshot.docs.map(doc => ({
    ...doc.data(),
    id:doc.id
  }))
  return vans
}

export async function getVan(id) {
  const docRef = doc(db, 'vans', id)
  const snapshot = await getDoc(docRef)
  return {
    ...snapshot.data(),
    id:snapshot.id
  }
}


export async function getHostVans() {
  const q = query(vansCollectionRef, where('hostId', '==', '123'))
  const snapshot = await getDocs(q)
  const vans = snapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }))
  return vans
}

// export async function getHostVan(id) {
//   // const q = query(vansCollectionRef, where('hostId', '==', '123'))
//   const docRef = doc(db, "vans", )
//   const snapshot = await getDoc(q)

//   return {
//     ...snapshot.data(),
//     id:snapshot.id
//   }
// }
export async function loginUser(creds) {
  const res = await fetch('/api/login', { method: 'post', body: JSON.stringify(creds) })
  
  const data = await res.json()
   if (!res.ok) {
    throw {
      message: data.message,
      status: res.status,
      statusText: res.statusText
    }
  }
  return data
}