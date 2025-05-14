import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPosts, savePosts } from '../data/posts';

export default function NewPostPage() {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [categories, setCategories] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      id: Date.now().toString(),
      title,
      summary,
      content,
      date: new Date().toISOString().split('T')[0],
      categories: categories.split(',').map((c) => c.trim()),
    };

    const current = getPosts();
    const updated = [newPost, ...current];
    savePosts(updated);

    navigate('/');
  };

  return (
    <div className="p-6 space-y-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold">Yeni Yazı Ekle</h1>
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
        <textarea
          placeholder="İçerik"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border p-2 rounded h-40"
          required
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Kaydet
        </button>
      </form>
    </div>
  );
}