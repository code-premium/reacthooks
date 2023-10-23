import React, { useReducer } from "react";
import IdadeReducer from "./reducers/IdadeReducer";

export default function HFReducer() {
  const [idade, dispatcher] = useReducer(IdadeReducer, 30);

  return (
    <div>
      <label>{idade}</label>

      <br></br>
      <input
        type="button"
        value="Somar"
        onClick={() => dispatcher({ type: "somar" })}
      />

      <input
        type="button"
        value="Subtrair"
        onClick={() => dispatcher({ type: "subtrair" })}
      />
    </div>
  );
}
