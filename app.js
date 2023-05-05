import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getDatabase,ref, set } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
import { getAuth ,signInWithEmailAndPassword ,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyDozWoYtmd62CuZglyZB6dKybosD7IWqoc",
    authDomain: "saylani-798d0.firebaseapp.com",
    databaseURL: "https://saylani-798d0-default-rtdb.firebaseio.com",
    projectId: "saylani-798d0",
    storageBucket: "saylani-798d0.appspot.com",
    messagingSenderId: "592885961481",
    appId: "1:592885961481:web:544d9ff4de12047e7b79d8",
    measurementId: "G-QED9N1P8ET"
  };

  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getDatabase(app);

  let sbtn = document.getElementById('sbtn')
  sbtn.addEventListener(`click`,()=>{
    let email = document.getElementById('semail').value
    let password = document.getElementById('spass').value
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
   
    const user = userCredential.user;
    console.log(user)
    // let rnum = Math.random()*100
    // let change = Math.floor(rnum)
    set(ref(db,`users/${user.uid}`),{
        email: email,
        pass: password
    })
    console.log('data inserted successfully')
  })
  .catch((error) => {
    
    console.log(error)

  });
  })

// let lbtn = document.getElementById('lbtn').addEventListener('click',()=>{
//     let email = document.getElementById('lemail').value
//     let password = document.getElementById('lpass').value

//     signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {

//     const user = userCredential.user;
//     console.log(user)
//   })
//   .catch((error) => {
//     console.log(error)
//   });

// })