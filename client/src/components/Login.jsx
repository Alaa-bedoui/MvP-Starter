import React,{useState} from 'react'
import axios from 'axios';


const Login=({setView,setthewanted})=> {
    let wantedUser=[]

   const verif=(name,pw) => {
      axios
        .get(`http://localhost:3000/api/owners/getOne/${name}/${pw}`)
        .then((res) => {
          if (res.data.length === 0) {alert("Wrong Username or Password ! :/ ") 
        return false}
          else {console.log(res.data), setthewanted(res.data),setView('balas')}
          
        });
   };
  
    let user = "";
    let pass = "";
  return (
    <div>
       <div id="loginTab">
        <h1 id="balas">El Balas</h1>
        <div>
          <input
            type="text"
            id="Username"
            onChange={(e) => {
              (user = e.target.value), console.log("username: ", user);
            }}
          />
          <label id="name">Username</label>
        </div>
        <div>
          <input
            type="password"
            id="typePasswordX"
            onChange={(e) => {
              (pass = e.target.value), console.log("password: ", pass);
            }}
          />
          <label id="pw">Password</label>
        </div>
        <button
          id="bouton"
          onClick={() => {
            verif(user,pass);
          }}
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default Login
