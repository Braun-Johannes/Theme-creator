import { useState } from "react";
import "./Color.css";
import ColorForm from "../ColorForm/ColorForm";

export default function Color({ color, onDelete, onEditScheme }) {
  const [deleteMode, setDeleteMode] = useState(false);
  const [editMode, setEditMode] = useState(false);

  function handleDeleteBool() {
    if (deleteMode) {
      onDelete(color.id);
    } else {
      setDeleteMode(true);
    }
  }

  function handleEditMode() {
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
        <ColorForm
          editMode={editMode}
          setEditMode={setEditMode}
          initialData={color}
          onSubmitScheme={onEditScheme}
          onCancel={handleEditMode}
        />
      ) : deleteMode ? (
        <p className="color-card-hightlight">
          Really delete?
          <button onClick={() => setDeleteMode(false)}>Cancel</button>
          <button onClick={handleDeleteBool}>Confirm Delete</button>
        </p>
      ) : (
        <>
          <button onClick={handleEditMode}>EDIT</button>
          <button onClick={handleDeleteBool}>Delete</button>
        </>
      )}
    </div>
  );
}
