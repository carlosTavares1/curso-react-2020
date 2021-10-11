import React, { useState } from "react";
import * as S from "./styles/calc.styled";
import { useStoreCalc } from "./somaReducer";

const ReducerHook = () => {
  const [primeiroNumero, setPrimeiroNumero] = useState();
  const [segundoNumero, setSegundoNumero] = useState();
  const [store, dispatch] = useStoreCalc();
  const resultadoLabel = "Resultado:";
  const numeroLabel = "Número:";
  const somarLabel = "Somar";
  const subtrairLabel = "Subtrair";
  const titleApp = "Calculadora Simples";

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
    <S.Container>
      <S.TitleApp>{titleApp}</S.TitleApp>
      {numeroLabel}
      <br />
      <S.InputValue
        type="text"
        value={primeiroNumero}
        onChange={(e) => setPrimeiroNumero(e.target.value)}
      />
      <br />
      {numeroLabel}
      <br />
      <S.InputValue
        type="text"
        value={segundoNumero}
        onChange={(e) => setSegundoNumero(e.target.value)}
      />
      <br />
      <S.ButtonContainer>
        <S.ActionButton type="primary" onClick={somar}>
          {somarLabel}
        </S.ActionButton>
        <S.ActionButton type="primary" danger onClick={subtrair}>
          {subtrairLabel}
        </S.ActionButton>
      </S.ButtonContainer>
      <br />
      <S.ResultContainer>
        {resultadoLabel}
        <br />
        <S.InputValue type="text" value={store.resultado} readOnly />
      </S.ResultContainer>
      <br />
    </S.Container>
  );
};

export default ReducerHook;
