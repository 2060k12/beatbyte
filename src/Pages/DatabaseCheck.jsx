import React from "react";
import { useState, useEffect } from "react";

const DatabaseCheck = () => {
  const [name, setname] = useState("Pranish");

  const changeMyName = () => {
    setname(prompt("Whats your name?"));
  };
  useEffect(() => {
    alert("use effect ran");
  }, [name]);

  return (
    <div>
      My name is {name}.
      <br />
      <button type="button" onClick={changeMyName}>
        Click me to revel my full name
      </button>
    </div>
  );
};

export default DatabaseCheck;
