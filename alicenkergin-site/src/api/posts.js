const BASE_URL = 'http://localhost:3000';

export async function getAllPosts() {
  const res = await fetch(`${BASE_URL}/posts`);
  return res.json();
}

export async function getPostById(id) {
  const res = await fetch(`${BASE_URL}/posts/${id}`);
  return res.json();
}

export async function createPost(postData) {
  const res = await fetch(`${BASE_URL}/posts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData),
  });
  return res.json();
}

export async function updatePost(id, updatedData) {
  const res = await fetch(`${BASE_URL}/posts/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedData),
  });
  return res.json();
}

export async function deletePost(id) {
  await fetch(`${BASE_URL}/posts/${id}`, {
    method: 'DELETE',
  });
}