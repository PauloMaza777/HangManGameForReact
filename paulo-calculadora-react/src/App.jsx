import { useState } from "react";

function App() {
  const texto = "Ingresa 2 números:";
  const texto2 = "by Paulo Esteban Maza Rivera - 20460351";
  const [numeroUno, setNumeroUno] = useState();
  const [numeroDos, setNumeroDos] = useState();
  const [resultado, setResultado] = useState(0);


  const handleChangeUno = (event) => {
    setNumeroUno(event.target.value);  
  };

  const handleChangeDos = (e) => {
    setNumeroDos(e.target.value);
  };

  const handleSumar = (event) =>{
    setResultado(parseFloat(numeroUno)+ parseFloat(numeroDos));
  };

  const handleRestar = (event) =>{
    setResultado(parseFloat(numeroUno)- parseFloat(numeroDos));
  };

  const handleMultiplicar = (event) =>{
    setResultado(parseFloat(numeroUno)* parseFloat(numeroDos));
  };

  const handleDividir = (event) =>{
    setResultado(parseFloat(numeroUno)/ parseFloat(numeroDos));
  };

  console.log(numeroUno, numeroDos); // ver en la parte de consola los valores ingresados 
  return (
    <>
   <h1>Calculadora con REACT</h1>
   {texto2}
   <br />
   <br />

   {texto} {/* variable dentro del html */}

   <input type="text" placeholder="Numero1" value={numeroUno} onChange={handleChangeUno}/>
   <input type="text" placeholder="Numero2" value={numeroDos} onChange={handleChangeDos}/>
    
    <hr /> {/*pone una linea que divide el salto de linea */}
    <br />  {/*pone un salto de linea normal */}
   
   <button onClick={handleSumar}>SUMAR</button>
   <button onClick={handleRestar}>RESTAR</button>
   <button onClick={handleMultiplicar}>MULTIPLICAR</button>
   <button onClick={handleDividir}>DIVIDIR</button>
   
   <hr />
   <p>RESULTADO: {resultado}</p>
   
   </>
  );
}

export default App
