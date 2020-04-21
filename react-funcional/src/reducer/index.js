import React, { useState } from "react";

import useStore from "./somaReducer";

function ReducerHook() {
  const [primeiroNumero, setPrimeiroNumero] = useState();
  const [segundoNumero, setSegundoNumero] = useState();

  const [store, dispatch] = useStore();

  const somar = () => {
    const primeiroNumeroInt = parseInt(primeiroNumero);
    const segundoNumeroInt = parseInt(segundoNumero);

    console.log("Dispachando a action");

    dispatch({
      type: "SOMA",
      payload: primeiroNumeroInt + segundoNumeroInt,
    });
  };

  const subtrair = () => {
    const primeiroNumeroInt = parseInt(primeiroNumero);
    const segundoNumeroInt = parseInt(segundoNumero);

    dispatch({
      type: "SUBTRAIR",
      payload: primeiroNumeroInt - segundoNumeroInt,
    });
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
      <button onClick={subtrair}>Subtrair</button>
      <br />
      Resultado:
      <br />
      <input type="text" value={store.resultado} readOnly />
      <br />
    </div>
  );
}

export default ReducerHook;
