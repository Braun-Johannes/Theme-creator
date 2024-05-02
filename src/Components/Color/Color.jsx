import { useState } from "react";
import "./Color.css";
import ColorForm from "../ColorForm/ColorForm";

export default function Color({ color, onDelete }) {
  const [deleteMode, setDeleteMode] = useState(false);
  const [editMode, setEditMode] = useState(false);

  function handleDeleteBool() {
    if (deleteMode) {
      onDelete(color.id);
    } else {
      setDeleteMode(true);
    }
  }

  function toggleEditMode() {
    setEditMode(!editMode);
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
      {editMode ? (
        <ColorForm />
      ) : deleteMode ? (
        <p className="color-card-hightlight">
          Really delete?
          <button onClick={() => setDeleteMode(false)}>Cancel</button>
          <button onClick={handleDeleteBool}>Confirm Delete</button>
        </p>
      ) : (
        <>
          <button onClick={toggleEditMode}>EDIT</button>
          <button onClick={handleDeleteBool}>Delete</button>
        </>
      )}
    </div>
  );
}
