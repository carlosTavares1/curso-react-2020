import React, { Component } from "react";

import Card from "../../components/card";
import ProdutoService from "../../app/produtoService";
import { withRouter } from "react-router-dom";

const estadoInicial = {
  nome: "",
  sku: "",
  descricao: "",
  preco: 0,
  fornecedor: "",
  custo: 0,
  unidade: 0,
  fabricante: "",
  sucesso: false,
  errors: [],
  atualizando: false,
};

class CadastroProduto extends Component {
  state = estadoInicial;

  constructor() {
    super();
    this.service = new ProdutoService();
  }

  onChange = (event) => {
    const valor = event.target.value;
    const nomeDoCampo = event.target.name;
    this.setState({ [nomeDoCampo]: valor });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const produto = {
      nome: this.state.nome,
      sku: this.state.sku,
      descricao: this.state.descricao,
      preco: this.state.preco,
      custo: this.state.custo,
      unidade: this.state.unidade,
      fornecedor: this.state.fornecedor,
      fabricante: this.state.fabricante,
    };

    try {
      this.service.salvar(produto);
      this.limparCampos();
      this.setState({ sucesso: true });
    } catch (erro) {
      const errors = erro.errors;
      this.setState({ errors: errors });
    }
  };

  limparCampos = () => {
    this.setState(estadoInicial);
  };

  componentDidMount() {
    const sku = this.props.match.params.sku;

    if (sku) {
      const resultado = this.service
        .obterProduto()
        .filter((produto) => produto.sku === sku);
      if (resultado.length === 1) {
        const produtoEncontrado = resultado[0];
        this.setState({ ...produtoEncontrado, atualizando: true });
      }
    }
  }

  render() {
    return (
      <Card
        header={
          this.state.atualizando
            ? "Atualização de Produto"
            : "Cadastro de Produto"
        }
      >
        <form id="formProduto" onSubmit={this.onSubmit}>
          {this.state.sucesso && (
            <div class="alert alert-dismissible alert-success">
              <strong>Bem feito!</strong> Cadastro realizado com sucesso!
            </div>
          )}

          {this.state.errors.length > 0 &&
            this.state.errors.map((msg) => {
              return (
                <div class="alert alert-dismissible alert-danger">
                  <strong>Ocorreu um erro!</strong> {msg}
                </div>
              );
            })}

          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Nome: *</label>
                <input
                  type="text"
                  name="nome"
                  onChange={this.onChange}
                  value={this.state.nome}
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>SKU: *</label>
                <input
                  type="text"
                  name="sku"
                  onChange={this.onChange}
                  disabled={this.state.atualizando && this.state.sku}
                  value={this.state.sku}
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label>Descrição:</label>
                <textarea
                  name="descricao"
                  onChange={this.onChange}
                  value={this.state.descricao}
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label>Fabricante: *</label>
                <input
                  name="fabricante"
                  onChange={this.onChange}
                  value={this.state.fabricante}
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Unidade: </label>
                <input
                  type="number"
                  name="unidade"
                  onChange={this.onChange}
                  value={this.state.unidade}
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Custo: </label>
                <input
                  type="text"
                  name="custo"
                  onChange={this.onChange}
                  value={this.state.custo}
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>Preço: *</label>
                <input
                  type="number"
                  name="preco"
                  onChange={this.onChange}
                  value={this.state.preco}
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label>Fornecedor: *</label>
                <input
                  type="text"
                  name="fornecedor"
                  onChange={this.onChange}
                  value={this.state.fornecedor}
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-1">
              <button type="submit" className="btn btn-success">
                {this.state.atualizando ? "Atualizar" : "Salvar"}
              </button>
            </div>
            <div className="col-md-1">
              <button onClick={this.limparCampos} className="btn btn-primary">
                Limpar
              </button>
            </div>
          </div>
        </form>
      </Card>
    );
  }
}

export default withRouter(CadastroProduto);
