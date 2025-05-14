// src/pages/PostPage.jsx
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getPosts, savePosts } from '../data/posts';
import CommentSection from '../components/CommentSection';
import PostContent from '../components/PostContent';
import { getPostById, deletePost } from '../api/posts';
import { useEffect, useState } from 'react';

export default function PostPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    getPostById(id).then((data) => setPost(data));
  }, [id]);

  const handleDelete = async () => {
    const confirmDelete = window.confirm('Bu yazıyı silmek istediğine emin misin?');
    if (!confirmDelete) return;
    await deletePost(id);
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
    <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 space-y-2">
  {post.imageUrl && (
    <img
      src={post.imageUrl}
      alt={post.title}
      className="w-full h-48 object-cover rounded-xl"
    />
  )}
  <div className="flex flex-wrap gap-2 mt-2">
    {post.categories.map((cat) => (
      <span
        key={cat}
        className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 text-xs rounded-full text-gray-700 dark:text-gray-300"
      >
        #{cat}
      </span>
    ))}
  </div>
      <PostContent post={post} />
       <Link
        to={`/edit/${post.id}`}
        className="text-sm text-blue-600 underline hover:text-blue-800 block mb-2"
        >
        ✏️ Düzenle
       </Link>
      <button onClick={handleDelete} className="text-sm text-red-600 underline hover:text-red-800">
        🗑️ Yazıyı Sil
      </button>
      <CommentSection postId={post.id} />
    </div>
  );
}