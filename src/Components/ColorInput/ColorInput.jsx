import { useState } from "react";

export default function ColorInput({ id, defaultValue }) {
  const [inputValue, setInputValue] = useState(defaultValue);

  function handleInputValue(event) {
    setInputValue(event.target.value);
  }

  return (
    <>
      <input
        name={id}
        id={id}
        type="text"
        value={inputValue}
        onChange={handleInputValue}
        required
      ></input>
      <input
        type="color"
        value={inputValue}
        onChange={handleInputValue}
        required
      ></input>
    </>
  );
}
