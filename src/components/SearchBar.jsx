import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-md mx-auto my-4"
    >
      <input
        type="text"
        placeholder="Search Quiz..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-grow p-3 rounded-l-xl border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 outline-none focus:border-blue-600"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-r-xl font-bold transition"
      >
        Search
      </button>
    </form>
  );
}
