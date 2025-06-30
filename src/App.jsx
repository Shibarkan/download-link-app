import { useState } from "react";
import PasteInput from "./components/PasteInput";
import PreviewCard from "./components/PreviewCard";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFetch = async (url) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(
        "/api/preview?url=" + encodeURIComponent(url)
      );
      const result = await res.json();

      if (result.error) {
        setError(result.error);
        setData(null);
      } else {
        setData(result);
      }
    } catch (err) {
      setError("Failed to connect to server.");
      setData(null);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto min-h-screen flex flex-col justify-center items-center p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">
        🔗 Link Downloader
      </h1>

      <PasteInput onSubmit={handleFetch} />

      {loading && <p className="mt-4 text-blue-500">Loading...</p>}

      {error && (
        <div className="mt-4 text-red-500 border border-red-400 rounded-lg p-2 bg-red-50">
          ⚠️ {error}
        </div>
      )}

      <PreviewCard data={data} />
    </div>
  );
}

export default App;
