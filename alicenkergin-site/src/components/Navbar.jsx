// Navbar.jsx
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark');
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  const toggleTheme = () => {
    const newDark = !dark;
    setDark(newDark);
    localStorage.setItem('theme', newDark ? 'dark' : 'light');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm p-4 mb-6 flex justify-between items-center transition-all duration-300">
      <Link to="/" className="text-xl font-bold text-gray-800 dark:text-white">
        alicenkergin.com
      </Link>
      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="text-sm text-gray-600 dark:text-gray-300 hover:underline"
        >
          {dark ? '🌞 Aydınlık' : '🌙 Karanlık'}
        </button>
        {isLoggedIn ? (
          <>
            <Link
              to="/new"
              className="bg-blue-600 text-white px-4 py-1.5 rounded-xl hover:bg-blue-700 transition"
            >
              + Yazı Ekle
            </Link>
            <button
              onClick={handleLogout}
              className="text-sm text-red-600 hover:underline"
            >
              Çıkış Yap
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="text-sm text-blue-600 hover:underline"
          >
            Giriş Yap
          </Link>
        )}
      </div>
    </nav>
  );
}