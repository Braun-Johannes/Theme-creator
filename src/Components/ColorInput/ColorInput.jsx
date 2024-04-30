import { useState } from "react";

export default function ColorInput({ id }) {
  const [hex, setHex] = useState("");
  //maybe filled default, warning in console

  function handleHex(event) {
    setHex(event.target.value);
  }

  return (
    <>
      <input
        name={id}
        id={id}
        type="text"
        value={hex}
        onChange={handleHex}
        placeholder="#123213"
        required
      ></input>
      <input type="color" value={hex} onChange={handleHex} required></input>
    </>
  );
}
