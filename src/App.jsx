import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/ColorForm/ColorForm";
import { useState } from "react";
import { uid } from "uid";

function App() {
  const [schemes, setSchemes] = useState(initialColors);

  function handleSubmitScheme(newScheme) {
    setSchemes([{ id: uid(), ...newScheme }, ...schemes]);
  }

  function handleDelete(id) {
    setSchemes(schemes.filter((scheme) => scheme.id !== id));
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm
        onSubmitScheme={handleSubmitScheme}
        initialData={initialColors}
      />
      {schemes.length === 0 ? (
        <p>No schemes... Start by adding one!</p>
      ) : (
        schemes.map((color) => (
          <Color key={color.id} color={color} onDelete={handleDelete} />
        ))
      )}
    </>
  );
}
export default App;
