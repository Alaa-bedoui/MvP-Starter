import React, { useEffect, useState } from "react";
import axios from "axios";

//fortune update!!!!!!!!!!!!!
//sokken delete!!!!!!
const Sokken1 = ({ setthewanted, thewanted, setView, setShow, show }) => {
  console.log(thewanted);
  const [sokken, setSokken] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/api/owners/getSokken/${thewanted[0].idowners}`
      )
      .then((res) => {
        setSokken(res.data);
        console.log("sokken: ", res.data);
      });
  }, [show]);
  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/api/owners/getOne/${thewanted[0].name}/${thewanted[0].password}`
      )
      .then((res) => {
        if (res.data.length === 0) {
          alert("Wrong");
          return false;
        } else {
          console.log(res.data), setthewanted(res.data), setView("balas");
        }
      });
  }, [show]);
  const fasakh = () => {
    axios
      .delete(
        `http://localhost:3000/api/owners/${sokken[0].idsokken}/${thewanted[0].idowners}`
      )
      .then((res) => {
        setShow(!show);
        console.log(res);
      })
      .catch((err) => console.error(err));
  };
  const okhles = () => {
    axios
      .put(`http://localhost:3000/api/owners/${thewanted[0].idowners}`)
      .then((res) => {
        console.log(res), setShow(!show);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <h1 id="balas1"> El {thewanted[0].name}'s balas </h1>
      <button id="butt" onClick={() => setView("addKery")}>
        {" "}
        Add Renter
      </button>
      <h3 id="budget">Budget: {thewanted[0].fortune} DT</h3>
      <ul id="lista">
        {sokken.map((e, i) => {
          return (
            <li>
              <div id="listname">{e.name}</div>
              <img id="img" src={e.image}></img>
              <button
                type="submit"
                id="delBut"
                onClick={() => {
                  fasakh();
                }}
              >
                {" "}
                Kick{" "}
              </button>
              <button
                type="submit"
                id="payed"
                onClick={() => {
                  okhles();
                }}
              >
                Get rent
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sokken1;
