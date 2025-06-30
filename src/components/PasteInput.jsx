import { useState } from "react";

export default function PasteInput({ onSubmit }) {
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!url) return;
    onSubmit(url);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        placeholder="Paste link here..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        Preview
      </button>
    </form>
  );
}
