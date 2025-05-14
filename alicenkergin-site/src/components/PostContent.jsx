export default function PostContent({ post }) {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white leading-tight">
        {post.title}
      </h1>
      <p className="text-sm text-gray-500 dark:text-gray-400">{post.date}</p>
      <p className="text-base text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
        {post.content}
      </p>
    </div>
  );
}