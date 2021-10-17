import "@testing-library/jest-dom";
import { render , act} from "./../../../test-utils";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

import ReducerHook from "./../../reducer/reducerHook";
import React from "react";

let documentBody;

describe("Render correctly Reducer Hook", () => {
  beforeEach(() => {
    documentBody = render(<ReducerHook />);
  });
  it("should show the title of system", () => {
    const { getByText } = documentBody;
    const title = getByText("Calculadora Simples");
    expect(title).toBeInTheDocument();
  });

  it("should show the Subtrair label in calc", () => {
    const { getByText } = documentBody;
    const subtrairLabel = getByText(/Subtrair/i);
    expect(subtrairLabel).toBeInTheDocument();
  });

  it("should show the Somar label in calc", () => {
    const { getByText } = documentBody;
    const somarLabel = getByText("Somar");
    expect(somarLabel).toBeInTheDocument();
  });

  it("should show the Resultado label in calc", () => {
    const { getByText } = documentBody;
    const resultadoLabel = getByText("Resultado:");
    expect(resultadoLabel).toBeInTheDocument();
  });

  it("should input number in first field", () => {
    const { getByTestId } = documentBody;
    const inputFirstNumber = getByTestId("firstInputCalc");
    expect(userEvent.type(inputFirstNumber, "11")).toBeTruthy();
  });

  it("should input number in second field", () => {
    const { getByTestId } = documentBody;
    const inputSecondNumber = getByTestId("secondInputCalc");
    expect(userEvent.type(inputSecondNumber, "9")).toBeTruthy();
  });

  it("should click in sum button", () => {
    const { getByRole } = documentBody;
    const btn = getByRole('button', {
      name: /Somar/i
    })
    act(() => {
      userEvent.click(btn);
    });
  });

  it("should click in subtract button", () => {
    const { getByRole } = documentBody;
    const btn = getByRole('button', {
      name: /Subtrair/i
    })
    act(() => {
      userEvent.click(btn);
    });
  });

  it("should be generate snapshot", () => {
    const { container } = documentBody;
    expect(container).toMatchSnapshot();
  });
});
