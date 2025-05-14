import { useEffect, useState } from 'react';

export default function CommentSection({ postId }) {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  // localStorage'tan yorumları al
  useEffect(() => {
    const stored = localStorage.getItem(`comments-${postId}`);
    if (stored) {
      setComments(JSON.parse(stored));
    }
  }, [postId]);

  // Yeni yorum ekleme
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !text.trim()) return;

    const newComment = {
      id: Date.now(),
      name,
      text,
      date: new Date().toLocaleDateString('tr-TR'),
    };

    const updatedComments = [...comments, newComment];

    setComments(updatedComments);
    localStorage.setItem(`comments-${postId}`, JSON.stringify(updatedComments));

    setName('');
    setText('');
  };

  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Yorumlar</h2>

      <form onSubmit={handleSubmit} className="space-y-4 mb-6">
        <input
          type="text"
          placeholder="Adınız"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <textarea
          placeholder="Yorumunuz"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full border p-2 rounded h-24"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Gönder
        </button>
      </form>

      {comments.length === 0 ? (
        <p className="text-gray-500">Henüz yorum yapılmamış.</p>
      ) : (
        <ul className="space-y-4">
          {comments.map((c) => (
            <li key={c.id} className="border p-4 rounded bg-gray-50">
              <p className="text-sm text-gray-600">
                {c.name} — <span>{c.date}</span>
              </p>
              <p className="mt-1">{c.text}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}