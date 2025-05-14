import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 space-y-3">
      {post.imageUrl && (
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-48 object-cover rounded-xl border border-gray-200 dark:border-gray-700"
        />
      )}
      <Link
        to={`/post/${post.id}`}
        className="block text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400 hover:underline leading-snug"
      >
        {post.title}
      </Link>
      <p className="text-sm text-gray-500 dark:text-gray-400">{post.date}</p>
      <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
        {post.summary}
      </p>
      <div className="flex flex-wrap gap-2 mt-2">
        {post.categories.map((cat) => (
          <span
            key={cat}
            className="px-3 py-0.5 bg-gray-100 dark:bg-gray-700 text-xs rounded-full text-gray-700 dark:text-gray-300 font-medium"
          >
            #{cat}
          </span>
        ))}
      </div>
    </div>
  );
}
