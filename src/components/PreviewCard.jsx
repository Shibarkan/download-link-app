export default function PreviewCard({ data }) {
  if (!data) return null;

  return (
    <div className="border rounded-lg p-4 mt-6 shadow-md">
      <h2 className="text-xl font-bold">{data.title}</h2>
      <p className="text-sm text-gray-500 mb-2">Author: {data.author}</p>
      <img
        src={data.thumbnail}
        alt={data.title}
        className="w-full rounded-lg mb-4"
      />
      <div className="flex gap-4">
        <a
          href={data.play}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          🎥 Download Video
        </a>
        <a
          href={data.music}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        >
          🎵 Download Audio
        </a>
      </div>
    </div>
  );
}
