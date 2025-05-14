export default function CategoryFilter({ categories, selectedCategory, onSelect }) {
    return (
      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={() => onSelect(null)}
          className={`px-3 py-1 rounded ${
            selectedCategory === null
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
          }`}
        >
          Hepsi
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className={`px-3 py-1 rounded ${
              selectedCategory === cat
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    );
  }