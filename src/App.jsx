import { useState } from "react";
import PasteInput from "./components/PasteInput";
import PreviewCard from "./components/PreviewCard";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFetch = async (url) => {
    setLoading(true);
    try {
      const res = await fetch(
        "http://localhost:5000/api/preview?url=" + encodeURIComponent(url)
      );
      const result = await res.json();
      setData(result);
    } catch (err) {
      alert("Failed to fetch preview");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">🔗 Link Downloader</h1>
      <PasteInput onSubmit={handleFetch} />
      {loading && <p className="mt-4">Loading...</p>}
      <PreviewCard data={data} />
    </div>
  );
}

export default App;
