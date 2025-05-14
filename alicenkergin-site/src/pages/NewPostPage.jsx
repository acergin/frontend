import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPosts, savePosts } from '../data/posts';
import PostForm from '../components/PostForm';
import { createPost } from '../api/posts';

export default function NewPostPage() {
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    await createPost(formData);
    navigate('/');
  };

  return (
    <div className="p-6 space-y-4 max-w-2xl mx-auto">
    <h1 className="text-2xl font-bold">Yeni Yazı Ekle</h1>
    <PostForm onSubmit={handleSubmit} />
  </div>
  );
}