import React  from 'react';

import { initializeApp } from "firebase/app";
import { getFirestore,addDoc,collection,query, where, getDocs } from "firebase/firestore";
import './App.css';




const firebaseConfig = {
  apiKey: "AIzaSyAYygK3QDwcgWxfKF_YlAdhQx4_-LQS6so",
  authDomain: "findwaldo-3caef.firebaseapp.com",
  projectId: "findwaldo-3caef",
  storageBucket: "findwaldo-3caef.appspot.com",
  messagingSenderId: "663714635058",
  appId: "1:663714635058:web:2014a1ae23054332fa8b2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



function App() {


      // Add a new document in collection "cities"
   const buttonFun = async ()=>{ 
    try {
      const docRef = await addDoc(collection(db, "users"), {
        name: "Alan",
        ranting: "121"
      });    
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    };

  const getFun= async()=>{         
      const q = query(collection(db, "users"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      }); 
  }
  return (
    <div >        
        <h1>hola</h1>
        <button onClick={buttonFun}>My button</button>
        <button onClick={getFun}>My button2</button>
    </div>
  );
}

export default App;
