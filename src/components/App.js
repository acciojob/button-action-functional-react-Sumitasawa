import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [showpara,setshowpara]=useState(false);


  const handleclick=()=>{
    setshowpara(true);
  }
  return (
    <div id="main">
     <button id="click" onClick={handleclick}>Click Me</button>


     {showpara&&(<p  id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy.</p>)}
    </div>
  );
}


export default App;
