import React, { useState } from "react";

function HFNested() {
  var [user, setUser] = useState({ name: "Paulo" });
  return (
    <>
      <Component1 user={user} />
    </>
  );
}

function Component1({ user }) {
  return (
    <>
      <Component2 user={user} />
    </>
  );
}

function Component2({ user }) {
  return (
    <>
      <Component3 user={user} />
    </>
  );
}

function Component3({ user }) {
  return <>Olá: {user.name}</>;
}

export default HFNested;
