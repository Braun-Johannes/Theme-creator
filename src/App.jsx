import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/ColorForm/ColorForm";
import { useState } from "react";
import { uid } from "uid";

function App() {
  const [schemes, setSchemes] = useState(initialColors);

  function handleAddScheme(newScheme) {
    setSchemes([{ id: uid(), ...newScheme }, ...schemes]);
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onAddScheme={handleAddScheme} schemes={schemes} />

      {schemes.map((color) => {
        return <Color key={color.id} color={color} />;
      })}
    </>
  );
}

export default App;

// return (
//   <>
//     <h1>Theme Creator</h1>
//     <ColorForm onAddScheme={handleAddScheme} />

// {initialColors.map((color) => {
//   return <Color key={color.id} color={color} />;
//     })}
//   </>
// );
// }
