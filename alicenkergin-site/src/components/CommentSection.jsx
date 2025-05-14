import { useEffect, useState } from 'react';

export default function CommentSection({ postId }) {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem(`comments-${postId}`);
    if (stored) setComments(JSON.parse(stored));
  }, [postId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;

    const newComment = {
      id: Date.now(),
      name,
      text,
      date: new Date().toLocaleDateString('tr-TR'),
    };

    const updated = [...comments, newComment];
    setComments(updated);
    localStorage.setItem(`comments-${postId}`, JSON.stringify(updated));
    setName('');
    setText('');
  };

  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold mb-4">Yorumlar</h2>
      <form onSubmit={handleSubmit} className="space-y-3 mb-6">
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
            <li key={c.id} className="border p-4 rounded bg-gray-50 dark:bg-gray-800">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {c.name} — <span>{c.date}</span>
              </p>
              <p className="mt-1 text-gray-800 dark:text-gray-200">{c.text}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}