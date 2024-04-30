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
      <label htmlFor="role">Role :</label>
      <br />
      <input
        type="text"
        id="role"
        name="role"
        value={role}
        onChange={handleRole}
        placeholder="e.g.: primary, secondary"
        required
      />
      <br />
      <label htmlFor="hex">Hex-value :</label>
      <br />
      <ColorInput id="hex" />
      <br />
      <label htmlFor="contrastText">Contrast :</label>
      <br />
      <ColorInput id="contrastText" />
      <br />
      <button type="submit">ADD SCHEME</button>
    </form>
  );
}
