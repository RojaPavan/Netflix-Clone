import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCFw7x8yDTF99py3zf061rOX_uCCspH8lU",
  authDomain: "react-entertainment-e43b3.firebaseapp.com",
  projectId: "react-entertainment-e43b3",
  storageBucket: "react-entertainment-e43b3.appspot.com",
  messagingSenderId: "1024271169853",
  appId: "1:1024271169853:web:606bbc720e13188104ad54",
  measurementId: "G-Q6NC3BT5BG",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
