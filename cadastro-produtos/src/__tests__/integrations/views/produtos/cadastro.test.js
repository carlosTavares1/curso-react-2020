import "@testing-library/jest-dom";
import { render, act } from "../../../../../test-utils";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

import Cadastro from "../../../../views/produtos/cadastro";
import React from "react";

let documentBody;

describe("Render correctly <Cadastro />", () => {
  beforeEach(() => {
    documentBody = render(
      <MemoryRouter>
        <Cadastro />
      </MemoryRouter>
    );
  });

  it("should show Nome label", () => {
    const { getByText } = documentBody;
    const label = getByText("Nome: *");
    expect(label).toBeInTheDocument();
  });

  it("should show SKU label", () => {
    const { getByText } = documentBody;
    const label = getByText("SKU: *");
    expect(label).toBeInTheDocument();
  });

  it("should show Descrição label", () => {
    const { getByText } = documentBody;
    const label = getByText("Descrição:");
    expect(label).toBeInTheDocument();
  });

  it("should show Fabricante label", () => {
    const { getByText } = documentBody;
    const label = getByText("Fabricante: *");
    expect(label).toBeInTheDocument();
  });

  it("should show Unidade label", () => {
    const { getByText } = documentBody;
    const label = getByText("Unidade:");
    expect(label).toBeInTheDocument();
  });

  it("should show Preço label", () => {
    const { getByText } = documentBody;
    const label = getByText("Preço: *");
    expect(label).toBeInTheDocument();
  });

  it("should show Fornecedor label", () => {
    const { getByText } = documentBody;
    const label = getByText("Fornecedor: *");
    expect(label).toBeInTheDocument();
  });

  it("should show Custo label", () => {
    const { getByText } = documentBody;
    const label = getByText("Custo:");
    expect(label).toBeInTheDocument();
  });

  it("should click in Salvar button", () => {
    const { getByRole } = documentBody;
    const btn = getByRole("button", {
      name: /Salvar/i,
    });
    act(() => {
      userEvent.click(btn);
    });
  });

  it("should click in Limpar button", () => {
    const { getByRole } = documentBody;
    const btn = getByRole("button", {
      name: /Limpar/i,
    });
    act(() => {
      userEvent.click(btn);
    });
  });

  it("should input text in Nome field", () => {
    const { getByTestId } = documentBody;
    const input = getByTestId("inputNome");
    expect(userEvent.type(input, "Transportadora x")).toBeTruthy();
  });

  it("should input text in SKU field", () => {
    const { getByTestId } = documentBody;
    const input = getByTestId("inputSku");
    expect(userEvent.type(input, "9999")).toBeTruthy();
  });

  it("should input text in Descrição field", () => {
    const { getByTestId } = documentBody;
    const input = getByTestId("inputDescricao");
    expect(userEvent.type(input, "Materiais de construção")).toBeTruthy();
  });

  it("should input text in Fabricante field", () => {
    const { getByTestId } = documentBody;
    const input = getByTestId("inputFabricante");
    expect(userEvent.type(input, "TDL Ltda")).toBeTruthy();
  });

  it("should input text in Unidade field", () => {
    const { getByTestId } = documentBody;
    const input = getByTestId("inputUnidade");
    expect(userEvent.type(input, "25")).toBeTruthy();
  });

  it("should input text in Custo field", () => {
    const { getByTestId } = documentBody;
    const input = getByTestId("inputCusto");
    expect(userEvent.type(input, "32")).toBeTruthy();
  });

  it("should input text in Preco field", () => {
    const { getByTestId } = documentBody;
    const input = getByTestId("inputPreco");
    expect(userEvent.type(input, "20")).toBeTruthy();
  });

  it("should input text in Fornecedor field", () => {
    const { getByTestId } = documentBody;
    const input = getByTestId("inputFornecedor");
    expect(userEvent.type(input, "TAR Company")).toBeTruthy();
  });

  it("should be generate snapshot", () => {
    const { container } = documentBody;
    expect(container).toMatchSnapshot();
  });
});
