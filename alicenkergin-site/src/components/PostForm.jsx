import { useState } from 'react';

export default function PostForm({ onSubmit, initialData = {} }) {
  const [title, setTitle] = useState(initialData.title || '');
  const [summary, setSummary] = useState(initialData.summary || '');
  const [content, setContent] = useState(initialData.content || '');
  const [categories, setCategories] = useState(
    (initialData.categories || []).join(', ')
  );
  const [imageUrl, setImageUrl] = useState(initialData.imageUrl || '');

  const handleSubmit = (e) => {
    e.preventDefault();

    const post = {
      title,
      summary,
      content,
      imageUrl,
      categories: categories.split(',').map((c) => c.trim()),
    };

    onSubmit(post);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Başlık"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border p-2 rounded"
        required
      />
      <input
        type="text"
        placeholder="Özet (summary)"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
        className="w-full border p-2 rounded"
        required
      />
      <input
        type="text"
        placeholder="Kategoriler (virgülle ayır)"
        value={categories}
        onChange={(e) => setCategories(e.target.value)}
        className="w-full border p-2 rounded"
      />
      <input
        type="text"
        placeholder="Kapak görseli URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        className="w-full border p-2 rounded"
      />
      <textarea
        placeholder="İçerik"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full border p-2 rounded h-40"
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
      >
        Kaydet
      </button>
    </form>
  );
}