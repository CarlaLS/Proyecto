import firebase from "firebase/compat/app";
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCff1-FVkFMj3FGulOX3V0w1K9nGiOU8kc",
    authDomain: "proyectoreact-cff68.firebaseapp.com",
    projectId: "proyectoreact-cff68",
    storageBucket: "proyectoreact-cff68.appspot.com",
    messagingSenderId: "497502692288",
    appId: "1:497502692288:web:14da04e3d4141f892ede25"
  };

  const app=firebase.initializeApp(firebaseConfig)
  const getStore = () => firebase.firestore(app)
  export default getStore;