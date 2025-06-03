'use client';
import { useState } from 'react';

export default function PostCaptionFetcher() {
  const [url, setUrl] = useState('');
  const [caption, setCaption] = useState('');
  const [hashtags, setHashtags] = useState([]);
  const [error, setError] = useState('');

  const fetchPost = async () => {
    setCaption('');
    setHashtags([]);
    setError('');
    try {
      const res = await fetch(`/api/extractor?url=${encodeURIComponent(url)}`);
      const json = await res.json();
      if (!res.ok) throw new Error(json.error);
      setCaption(json.caption);
      setHashtags(json.hashtags);
    } catch (err) {
      setError('Could not fetch post content.');
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Paste social post URL"
        className="w-full border p-2 rounded mb-2"
      />
      <button onClick={fetchPost} className="bg-blue-600 text-white px-4 py-2 rounded">
        Fetch Caption
      </button>
      {error && <p className="text-red-500 mt-3">{error}</p>}
      {caption && (
        <div className="mt-4">
          <p className="font-semibold mb-2">Caption:</p>
          <p>{caption}</p>
          {hashtags.length > 0 && (
            <div className="mt-4">
              <p className="font-semibold mb-2">Hashtags:</p>
              <ul className="list-disc pl-5">
                {hashtags.map((tag, i) => (
                  <li key={i}>{tag}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
