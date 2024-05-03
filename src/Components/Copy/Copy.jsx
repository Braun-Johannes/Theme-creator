import { useEffect, useState } from "react";

export default function Copy({ hexCode }) {
  const [copied, setCopied] = useState(false);

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(hexCode);
      setCopied(true);
    } catch (error) {
      console.error("Failed to copy: ", error);
    }
  }

  useEffect(() => {
    let timer;
    if (copied) {
      timer = setTimeout(() => {
        setCopied(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <>
      <button onClick={copyToClipboard}>Copy</button>
      {copied && <h3>Color copied!</h3>}
    </>
  );
}

//<button onClick={copyToClipboard}>{copied ? "Copy successful : "Copy"}</button>

//   function copyToClipboard() {
//     navigator.clipboard
//       .writeText(hexCode)
//       .then(() => setCopied(true))
//       .catch((error) => console.error("Failed to copy: ", error));
//   }
// Option instead of async function
