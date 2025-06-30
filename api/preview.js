export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { url } = req.body;
  if (!url) {
    return res.status(400).json({ error: 'URL is required' });
  }

  try {
    const api = `https://tikwm.com/api/?url=${encodeURIComponent(url)}`;
    const response = await fetch(api);
    const data = await response.json();

    if (data.code !== 0) {
      return res.status(400).json({ error: 'Failed to fetch data' });
    }

    return res.json({
      title: data.data.title,
      thumbnail: data.data.cover,
      play: data.data.play, // Video URL
      music: data.data.music, // Audio URL
      author: data.data.author.nickname,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Something went wrong' });
  }
}
