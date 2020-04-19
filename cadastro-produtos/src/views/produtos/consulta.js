import React, { Component } from "react";

import ProdutosTable from "./produtosTable";
import Card from "../../components/card";
import ProdutoService from "../../app/produtoService";
import { withRouter } from "react-router-dom";
import produtosTable from "./produtosTable";

class ConsultaProdutos extends Component {
  state = {
    produtos: [],
  };

  constructor() {
    super();
    this.service = new ProdutoService();
  }

  componentDidMount() {
    const produtos = this.service.obterProduto();
    this.setState({ produtos });
  }

  deletar = (sku) => {
    const produtos = this.service.deletar(sku);
    this.setState({ produtos });
  };

  editarProduto = (sku) => {
    this.props.history.push(`/cadastro-produto/${sku}`);
  };

  render() {
    return (
      <Card header="Cadastro de Produto">
        <ProdutosTable
          produtos={this.state.produtos}
          editarAction={this.editarProduto}
          deletarAction={this.deletar}
        />
      </Card>
    );
  }
}

export default withRouter(ConsultaProdutos);
