import "../ColorForm/colorForm.css";
import { useState } from "react";
import ColorInput from "../ColorInput/ColorInput";

export default function ColorForm({ onAddScheme }) {
  const [role, setRole] = useState("");

  function handleRole(event) {
    setRole(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onAddScheme(data);

    event.target.reset();
    event.target.elements.role.focus();
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset className="">
        <legend>Create your own color-scheme :</legend>
        <label htmlFor="role">Role :</label>
        <input
          type="text"
          id="role"
          name="role"
          value={role}
          onChange={handleRole}
          placeholder="e.g.: primary, secondary"
          required
        ></input>
        <hr />
        <label htmlFor="hex">Hex-value :</label>
        <ColorInput id="hex" />
        <hr />
        <label htmlFor="contrastText">Contrast :</label>
        <ColorInput id="contrastText" />
        <hr />
        <button type="submit">ADD SCHEME</button>
      </fieldset>
    </form>
  );
}
