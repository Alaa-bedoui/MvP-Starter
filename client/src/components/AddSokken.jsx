import axios from "axios";
import React, { useState } from "react";

function AddSokken({setView,thewanted}) {
  const [kery, setKery] = useState("");
  const [img, setImg] = useState("");
console.log(thewanted);

 const add=(name,image)=>{
    axios.post(`http://localhost:3000/api/owners/${thewanted[0].idowners}`,{
        name:name,
        image:image
    }).then((res)=>{console.log(res);})
 }
  return (
    <div className="zidna">
      <h2 id="adder">Add Renter</h2>
      <ul>
        <li>
          <input 
          id="inputname"
            type="text"
            placeholder="Name"
            onChange={(e) => setKery(e.target.value)}
          ></input>
        </li>
        <li>
          <input
          id="inputimg"
            type="text"
            placeholder="Image"
            onChange={(e) => setImg(e.target.value)}
          ></input>
        </li>
      </ul>
      <button id="zidbut" type="submit" onClick={()=>{setView('balas'), add(kery,img)}}> Add barka </button>
    </div>
  );
}

export default AddSokken;
