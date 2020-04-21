import React, { useState } from "react";

function App() {
  const [primeiroNumero, setPrimeiroNumero] = useState();
  const [segundoNumero, setSegundoNumero] = useState();
  const [resultado, setResultado] = useState();

  const somar = () => {
    const primeiroNumeroInt = parseInt(primeiroNumero);
    const segundoNumeroInt = parseInt(segundoNumero);
    setResultado(primeiroNumeroInt + segundoNumeroInt);
  };

  return (
    <div>
      Número 1:
      <br />
      <input
        type="text"
        value={primeiroNumero}
        onChange={(e) => setPrimeiroNumero(e.target.value)}
      />
      <br />
      Número 2:
      <br />
      <input
        type="text"
        value={segundoNumero}
        onChange={(e) => setSegundoNumero(e.target.value)}
      />
      <br />
      <button onClick={somar}>Somar</button>
      <br />
      Resultado:
      <br />
      <input type="text" value={resultado} />
      <br />
    </div>
  );
}

export default App;
