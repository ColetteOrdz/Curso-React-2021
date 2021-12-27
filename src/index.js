import React from "react";
import ReactDOM from "react-dom";
import PrimeraApp from "./PrimeraApp";
//import CounterApp from "./CounterApp.js";

import "./index.css";

// const saludo = <h1>Hola mundo</h1>;

const divRoot = document.querySelector("#root");

//Tiene dos argumentos, lo que quiero renderizar y dónde lo quiero renderizar
ReactDOM.render(
   <PrimeraApp saludo="Hola carayola" />,
  // <CounterApp value={10} />,
  divRoot
);
