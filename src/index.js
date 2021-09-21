//1) Tener la variable React en scope
import React from "react"

//2) Tener la variable ReactDOM en scope

import ReactDOM from "react-dom"


//3) Tener un elemento de React


import App from "./App"
import "./estilo.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons'


//4) Tener una función render corriendo
//ReactDOM.render (a, document.querySelector("#root"))
ReactDOM.render(<App/>,document.getElementById('root'))