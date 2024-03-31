import "./calculadora.css";
import { useState } from "react";
import useCalculator from "../hooks/useCalculator";

export default function Calculadora() {
  const { operations } = useCalculator();
  const [numbers, setNumbers] = useState([null, null]);
  const [result, setResult] = useState(null);
  const errorMessages = {
    inputError: "Error: Only numbers!!!",
    NanError: "Invalid values to perform the operation"
  }
  const operationsControls = ["sum", "subtract", "multiply", "divide"];
  const formattingControls = ["reset input", "reset result"];

  const executeOperation = (control) => {
    const existKey = control in operations;
    const isUndefined = numbers.some((number) => typeof number !== "number");

    if (isUndefined) return setResult(errorMessages.inputError);

    if (existKey) {
      const resultOperation = operations[control](numbers);
      isNaN(resultOperation)
        ? setResult(errorMessages.NanError)
        : setResult(resultOperation.toString());
    }
  };
  const updateNumber = (e, index) => {
    setNumbers(
      numbers.map((number, i) =>
        i === index ? Number(e.target.value) : number
      )
    );
  };
  const resetValues = (control) => {
    if (control === "reset input") setNumbers([null, null]);
    if (control === "reset result") setResult(null);
  };

  return (
    <section className="calculator">
      <header className="calculator-header">
        <h1>Simplest Working Calculator</h1>
      </header>
      <div className="calculator-wrapper">
        <form className="calculator-content">
          <p className="calculator-result">{result ?? "EMPTY"}</p>
          <label className="calculador-inputWrapper">
            <p className="calculador-label">Enter 2 numbers:</p>
            <div className="calculador-inputs">
              {numbers.map((_, index) => (
                <input
                  title={`value ${index + 1}`}
                  key={index}
                  onChange={(e) => updateNumber(e, index)}
                  className="calculador-input"
                  value={numbers[index] ?? ""}
                  pattern="[0-9]"
                  type="number"
                />
              ))}
            </div>
          </label>
        </form>
        <div className="calculator-controls">
          {operationsControls.map((control) => (
            <button
              onClick={() => executeOperation(control)}
              className="calculator-btnControl"
              key={control}
              type="button"
            >
              {control}
            </button>
          ))}
          {formattingControls.map((control) => (
            <button
              onClick={() => resetValues(control)}
              className="calculator-btnControl"
              key={control}
              type="button"
            >
              {control}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
