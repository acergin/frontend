import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PostCard from '../components/PostCard';
import CategoryFilter from '../components/CategoryFilter';
import { getAllPosts } from '../api/posts';

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    getAllPosts().then((data) => setPosts(data));
  }, []);

  const allCategories = Array.from(
    new Set(posts.flatMap((post) => post.categories))
  );

  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.categories.includes(selectedCategory))
    : posts;

  return (
    <div className="p-6 space-y-6 bg-gray-50 dark:bg-gray-900 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">

      <h1 className="text-3xl font-bold text-gray-800">Tüm Yazılar</h1>

      {/* Kategori filtreleme */}
      <CategoryFilter
        categories={allCategories}
        selectedCategory={selectedCategory}
        onSelect={setSelectedCategory}
        />

      {/* Yazı listesi */}
      {filteredPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}