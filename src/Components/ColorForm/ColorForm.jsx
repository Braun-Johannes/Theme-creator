import "../ColorForm/colorForm.css";
import ColorInput from "../ColorInput/ColorInput";

export default function ColorForm({
  onSubmitScheme,
  initialData = { role: "", hex: "#11ff00", contrastText: "#000000" },
  onCancel,
  editMode,
  setEditMode,
}) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    if (editMode) {
      data.id = initialData.id;
      setEditMode(false);
    }

    onSubmitScheme(data);

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
        defaultValue={initialData.role}
        placeholder="e.g.: primary, secondary"
        required
      />
      <br />
      <label htmlFor="hex">Hex-value :</label>
      <br />
      <ColorInput id="hex" defaultValue={initialData.hex} />
      <br />
      <label htmlFor="contrastText">Contrast :</label>
      <br />
      <ColorInput id="contrastText" defaultValue={initialData.contrastText} />
      <br />
      <button type="submit">{initialData.id ? "UPDATE" : "ADD SCHEME"}</button>
      {initialData.id && <button onClick={onCancel}>CANCEL</button>}
    </form>
  );
}
//42 -> keine Ausführung auf Update!!!!
