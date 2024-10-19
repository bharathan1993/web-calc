import React, { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("");

  const appendToDisplay = (value) => {
    setDisplay((prevDisplay) => prevDisplay + value);
  };

  const clearDisplay = () => {
    setDisplay("");
  };

  const calculate = () => {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(display);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay("Error");
    }
  };

  const buttons = [
    { label: "C", onClick: clearDisplay, className: "clear" },
    { label: "(", onClick: () => appendToDisplay("("), className: "function" },
    { label: ")", onClick: () => appendToDisplay(")"), className: "function" },
    { label: "/", onClick: () => appendToDisplay("/"), className: "operator" },
    { label: "7", onClick: () => appendToDisplay("7"), className: "number" },
    { label: "8", onClick: () => appendToDisplay("8"), className: "number" },
    { label: "9", onClick: () => appendToDisplay("9"), className: "number" },
    { label: "*", onClick: () => appendToDisplay("*"), className: "operator" },
    { label: "4", onClick: () => appendToDisplay("4"), className: "number" },
    { label: "5", onClick: () => appendToDisplay("5"), className: "number" },
    { label: "6", onClick: () => appendToDisplay("6"), className: "number" },
    { label: "-", onClick: () => appendToDisplay("-"), className: "operator" },
    { label: "1", onClick: () => appendToDisplay("1"), className: "number" },
    { label: "2", onClick: () => appendToDisplay("2"), className: "number" },
    { label: "3", onClick: () => appendToDisplay("3"), className: "number" },
    { label: "+", onClick: () => appendToDisplay("+"), className: "operator" },
    { label: "0", onClick: () => appendToDisplay("0"), className: "number" },
    { label: ".", onClick: () => appendToDisplay("."), className: "number" },
    { label: "=", onClick: calculate, className: "equals" },
    {
      label: "√",
      onClick: () => appendToDisplay("Math.sqrt("),
      className: "function",
    },
    {
      label: "sin",
      onClick: () => appendToDisplay("Math.sin("),
      className: "function",
    },
    {
      label: "cos",
      onClick: () => appendToDisplay("Math.cos("),
      className: "function",
    },
    {
      label: "tan",
      onClick: () => appendToDisplay("Math.tan("),
      className: "function",
    },
    {
      label: "log",
      onClick: () => appendToDisplay("Math.log("),
      className: "function",
    },
  ];

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400">
      <div className="w-80 bg-white bg-opacity-80 rounded-lg shadow-lg p-6">
        <input
          type="text"
          value={display}
          readOnly
          className="w-full h-12 text-right text-2xl mb-4 bg-gray-100 rounded p-2"
        />
        <div className="grid grid-cols-4 gap-2">
          {buttons.map((button, index) => (
            <button
              key={index}
              onClick={button.onClick}
              className={`p-2 text-lg rounded transition-colors ${
                button.className === "number"
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : button.className === "operator"
                  ? "bg-red-500 text-white hover:bg-red-600"
                  : button.className === "function"
                  ? "bg-green-500 text-white hover:bg-green-600"
                  : button.className === "clear"
                  ? "bg-yellow-500 text-white hover:bg-yellow-600"
                  : "bg-purple-500 text-white hover:bg-purple-600"
              }`}
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
