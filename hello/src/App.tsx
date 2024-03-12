import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Hello(props) {
  return (
    <div>
      <p>hello {props.name}, you were {props.age}years old.</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <p>Greetings</p>
      <Hello name="Paulo Esteban Maza Rivera" age = "22 " />
      <Hello name="Dafne Carolina Palacios Barbosa" age = "21 "/>
      <Hello name="Telma Barbara Rivera Perez" age = "52 "/>
    </div>
  );
}


// DOM: es una representación virtual de nuestra pagina web


export default App
