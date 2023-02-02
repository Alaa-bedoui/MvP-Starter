import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Sokken1 from "./components/Sokken1.jsx";
import Login from "./components/Login.jsx";
import AddSokken from "./components/AddSokken.jsx";

const App = () => {
  const [thewanted, setthewanted] = useState([]);
  const [show,setShow]=useState(false)

  console.log(thewanted);
  const [view, setView] = useState("login");
  

  const renderView = () => {
    if (view === "login") {
      return <Login setView={setView} setthewanted={setthewanted} thewanted={thewanted} />;
    } else if (view === "balas") {
      return <Sokken1 setthewanted={setthewanted} thewanted={thewanted} setView={setView} show={show} setShow={setShow}/>;
    }else if (view==="addKery"){
      return <AddSokken setView={setView} thewanted={thewanted}/>
    }
  };


  return <div>{renderView("login")}</div>;
};

ReactDOM.render(<App />, document.getElementById("app"));
