import { useState } from "react";
import "./Color.css";

export default function Color({ color, onDelete }) {
  const [confirmDelete, setConfirmDelete] = useState(false);

  function handleDeleteBool() {
    if (confirmDelete) {
      onDelete(color.id);
    } else {
      setConfirmDelete(true);
    }
  }

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      {confirmDelete ? (
        <p className="color-card-hightlight">
          Really delete?
          <button onClick={() => setConfirmDelete(false)}>Cancel</button>
          <button onClick={handleDeleteBool}>Confirm Delete</button>
        </p>
      ) : (
        <button onClick={handleDeleteBool}>Delete</button>
      )}
    </div>
  );
}
