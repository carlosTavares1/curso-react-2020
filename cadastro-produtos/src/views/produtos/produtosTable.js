import React from "react";

export default (props) => (
  <table className="table table-hover">
    <thead>
      <tr>
        <th>Nome</th>
        <th>SKU</th>
        <th>Preço</th>
        <th>Unidade</th>
        <th>Custo</th>
        <th>Fornecedor</th>
        <th>Fabricante</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {props.produtos.map((produto, index) => {
        return (
          <tr key={index}>
            <th>{produto.nome}</th>
            <th>{produto.sku}</th>
            <th>{produto.preco}</th>
            <th>{produto.unidade}</th>
            <th>{produto.custo}</th>
            <th>{produto.fornecedor}</th>
            <th>{produto.fabricante}</th>
            <th>
              <button
                onClick={() => props.editarAction(produto.sku)}
                className="btn btn-primary"
              >
                Editar
              </button>
              <button
                onClick={() => props.deletarAction(produto.sku)}
                className="btn btn-danger"
                style={{ marginLeft: "15px" }}
              >
                Remover
              </button>
            </th>
          </tr>
        );
      })}
    </tbody>
  </table>
);
