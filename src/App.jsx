import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/ColorForm/ColorForm";

import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [schemes, setSchemes] = useLocalStorageState("schemes", {
    defaultValue: initialColors,
  });

  function handleSubmitScheme(newScheme) {
    setSchemes([{ id: uid(), ...newScheme }, ...schemes]);
  }

  function handleDelete(id) {
    setSchemes(schemes.filter((scheme) => scheme.id !== id));
  }

  function handleEditScheme(editScheme) {
    setSchemes(
      schemes.map((scheme) => {
        if (scheme.id === editScheme.id) {
          return editScheme;
        }
        return scheme;
      })
    );
  }

  return (
    <>
      <ColorForm onSubmitScheme={handleSubmitScheme} />
      {schemes.length === 0 ? (
        <p>No schemes... Start by adding one!</p>
      ) : (
        schemes.map((color) => (
          <Color
            key={color.id}
            color={color}
            onEditScheme={handleEditScheme}
            onDelete={handleDelete}
          />
        ))
      )}
    </>
  );
}
export default App;
