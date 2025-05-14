import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPosts, savePosts } from '../data/posts';

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    setPosts(getPosts());
  }, []);

  const allCategories = Array.from(
    new Set(posts.flatMap((post) => post.categories))
  );

  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.categories.includes(selectedCategory))
    : posts;

  return (
    <div className="p-6 space-y-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">

<div className="bg-white dark:bg-black text-black dark:text-white p-4">
  Test kutusu: Tema değişiyor mu?
</div>

      <h1 className="text-3xl font-bold text-gray-800">Tüm Yazılar</h1>

      {/* Kategori filtreleme */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-3 py-1 rounded ${
            selectedCategory === null
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          Hepsi
        </button>
        {allCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1 rounded ${
              selectedCategory === cat
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Yazı listesi */}
      {filteredPosts.map((post) => (
        <div
          key={post.id}
          className="p-4 bg-white rounded shadow hover:shadow-md transition"
        >
          <Link
            to={`/post/${post.id}`}
            className="text-2xl font-semibold text-blue-600 hover:underline"
          >
            {post.title}
          </Link>
          <p className="text-gray-500 text-sm">{post.date}</p>
          <p className="mt-2 text-gray-700">{post.summary}</p>
          <div className="mt-2 text-sm text-gray-500 space-x-2">
            {post.categories.map((cat) => (
              <span
                key={cat}
                className="inline-block bg-gray-100 px-2 py-0.5 rounded"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}