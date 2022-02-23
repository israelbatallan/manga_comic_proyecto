// 1) Necesitamos la variable React en Scope
    /* ES6 Module */
import React from 'react'

// 2) Necesitamos la variable ReactDOM en Scope
import ReactDOM from 'react-dom'

// 3) Necesitamos un compponente en Scope
// function App(){
//     return "Hola Mundo"
// }

// const App = () => "Hola Mundo sin retorno"

import App from './App'
import "./style.css"

// 4) Necesitamos poner el componente en el DOM
// ReactDOM.render(<App></App>, document.getElementById("root"))
ReactDOM.render(<App/>, document.getElementById("root"))