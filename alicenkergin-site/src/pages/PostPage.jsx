// src/pages/PostPage.jsx
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getPosts, savePosts } from '../data/posts';
import CommentSection from '../components/CommentSection';

export default function PostPage() {
  const { id } = useParams();
  const post = getPosts().find((p) => p.id === id);
  const navigate = useNavigate();

  const handleDelete = () => {
    const confirmDelete = window.confirm('Bu yazıyı silmek istediğine emin misin?');
    if (!confirmDelete) return;
  
    const remainingPosts = getPosts().filter((p) => p.id !== id);
    savePosts(remainingPosts);
    navigate('/');
  };

  if (!post) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold text-red-600">Yazı bulunamadı</h2>
        <Link to="/" className="text-blue-600 underline">← Anasayfaya dön</Link>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800">{post.title}</h1>
      <button
  onClick={handleDelete}
  className="mt-2 text-sm text-red-600 underline hover:text-red-800"
>
  🗑️ Yazıyı Sil
</button>
      <p className="text-sm text-gray-500">{post.date}</p>
      <p className="text-gray-700 whitespace-pre-line">{post.content}</p>
      <Link to="/" className="text-blue-600 underline">← Geri dön</Link>
    </div>
  );
}