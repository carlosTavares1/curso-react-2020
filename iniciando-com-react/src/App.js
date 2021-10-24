import React from 'react';

const App = props => {
  const modificarNome = event => {
    console.log(event.target.value);
  };

  const criarComboBox = () => {
    const opcoes = ['Fulano', 'Ciclano'];
    const opcaoComboBox = opcoes.map(opcao => <option>{opcao}</option>);
    return <select>{opcaoComboBox}</select>;
  };

  const MeuCombo = () => criarComboBox();

  return (
    <div className="elementos-centralizados">
      <input type="text" value={props.nome} onChange={modificarNome} />
      <h1>Hello, {props.nome}</h1>
      <MeuCombo />
    </div>
  );
};
export default App;
