import { useState } from "react";

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

  return (
    <>
      <button onClick={copyToClipboard}>Copy</button>
      {copied && <p>Color copied to clipboard!</p>}
    </>
  );
}
