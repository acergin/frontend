import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  // Tema class'ını HTML'ye uygula
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  const toggleTheme = () => {
    const newDark = !dark;
    setDark(newDark);
    localStorage.setItem('theme', newDark ? 'dark' : 'light');
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md p-4 mb-6 flex justify-between items-center">
      <Link to="/" className="text-xl font-semibold text-gray-800 dark:text-white">
        alicenkergin.com
      </Link>
      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="text-sm text-gray-600 dark:text-gray-300 hover:underline"
        >
          {dark ? '🌞 Aydınlık' : '🌙 Karanlık'}
        </button>
        <Link
          to="/new"
          className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
        >
          + Yazı Ekle
        </Link>
      </div>
    </nav>
  );
}