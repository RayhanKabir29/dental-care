import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const InitializeAutentication =() =>{
    initializeApp(firebaseConfig);
}

export default InitializeAutentication;