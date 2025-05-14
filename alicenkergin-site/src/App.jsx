import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import NewPostPage from './pages/NewPostPage';
import EditPostPage from './pages/EditPostPage';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';

function PrivateRoute({ children }) {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      <Router>
        <Navbar />
        <main className="max-w-3xl mx-auto px-4 pb-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/new" element={<NewPostPage />} />
            <Route path="/edit/:id" element={<EditPostPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/new"
              element={
                <PrivateRoute>
                  <NewPostPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/edit/:id"
              element={
                <PrivateRoute>
                  <EditPostPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </main>
      </Router>
    </div>
  );
}