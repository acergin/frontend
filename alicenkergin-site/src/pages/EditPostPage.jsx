import { useParams, useNavigate } from 'react-router-dom';
import { getPosts, savePosts } from '../data/posts';
import PostForm from '../components/PostForm';
import { getPostById, updatePost } from '../api/posts';
import { useEffect, useState } from 'react';

export default function EditPostPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const posts = getPosts();
  //const post = posts.find((p) => p.id === id);

  useEffect(() => {
    getPostById(id).then((data) => setPost(data));
  }, [id]);

  if (!post) {
    return <div className="p-6">Yazı bulunamadı.</div>;
  }

  const handleSubmit = async (updatedData) => {
    await updatePost(id, updatedData);
    navigate('/');
  };

  return (
    <div className="p-6 space-y-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold">Yazıyı Düzenle</h1>
      <PostForm initialData={post} onSubmit={handleSubmit} />
    </div>
  );
}