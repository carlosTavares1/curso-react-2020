import React from "react";

import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="jumbotron">
      <h1 className="display-3">Bem-vindo!</h1>
      <p className="lead">
        Sistema de cadastro de produtos 
      </p>
      <hr className="my-4" />
      <p className="lead">
        <Link className="btn btn-primary btn-lg" to="/cadastro-produto" role="button">
          Cadastrar
        </Link>
      </p>
    </div>
  );
}

export default Home;