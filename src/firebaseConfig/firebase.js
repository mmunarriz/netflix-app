import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

// Configuración y keys en Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBjexxHYDxMTIW_r8IaXyHeKBq6CGwXjms",
  authDomain: "tp-grupo10.firebaseapp.com",
  projectId: "tp-grupo10",
  storageBucket: "tp-grupo10.appspot.com",
  messagingSenderId: "1018239703858",
  appId: "1:1018239703858:web:698ce9a78153dc7e20152b"

};

// Inicia la aplicacion en Firebase
const app = initializeApp(firebaseConfig);

// Autorizacion de usuarios en Firebase
export const auth = getAuth(app)

// Base de datos en Firebase
export const db = getFirestore(app);
