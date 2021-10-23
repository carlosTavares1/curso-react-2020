import "@testing-library/jest-dom";
import { render, act } from "./../../../../test-utils";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

import Home from "./../../../views/home";
import React from "react";

let documentBody;

describe("Render correctly <Home />", () => {
  beforeEach(() => {
    documentBody = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
  });

  it("should show the text welcome", () => {
    const { getByText } = documentBody;
    const text = getByText("Bem-vindo!");
    expect(text).toBeInTheDocument();
  });

  it("should show description system", () => {
    const { getByText } = documentBody;
    const description = getByText("Sistema de cadastro de produtos");
    expect(description).toBeInTheDocument();
  });

  it("should click in Cadastrar button", () => {
    const { getByRole } = documentBody;
    const btn = getByRole("button", {
      name: /Cadastrar/i,
    });
    act(() => {
      userEvent.click(btn);
    });
  });

  it("should be generate snapshot", () => {
    const { container } = documentBody;
    expect(container).toMatchSnapshot();
  });
});
