import React, { useContext } from "react";
import { UserContext } from "./contexts/UserContext";

function HFNested() {
  return (
    <>
      <Component1 />
    </>
  );
}

function Component1() {
  var context = useContext(UserContext);
  return (
    <>
      {context.user}
      <Component2 />
    </>
  );
}

function Component2() {
  return (
    <>
      <Component3 />
    </>
  );
}

function Component3() {
  var context = useContext(UserContext);

  function mudaNome(event) {
    context.setUser(event.target.value);
  }

  return (
    <>
      <input type="text" onChange={mudaNome}></input>
      Olá: {context.user}
    </>
  );
}

export default HFNested;
