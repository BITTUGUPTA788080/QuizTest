import { useState } from "react";
import SearchBar from "../components/SearchBar";

export default function Quiz() {
  // Dummy quiz data with category and tags
  const [quizzes] = useState([
    {
      id: 1,
      title: "JavaScript Basics",
      category: "Programming",
      tags: ["JS", "Beginner"],
    },
    {
      id: 2,
      title: "React Fundamentals",
      category: "Frontend",
      tags: ["React", "JSX", "Hooks"],
    },
    {
      id: 3,
      title: "Node.js Advanced",
      category: "Backend",
      tags: ["Node", "Express", "API"],
    },
    {
      id: 4,
      title: "MongoDB Basics",
      category: "Database",
      tags: ["MongoDB", "NoSQL"],
    },
    {
      id: 5,
      title: "CSS Tricks",
      category: "Frontend",
      tags: ["CSS", "Flexbox", "Grid"],
    },
    {
      id: 6,
      title: "HTML5 Features",
      category: "Frontend",
      tags: ["HTML", "Semantic"],
    },
  ]);

  const [filteredQuizzes, setFilteredQuizzes] = useState(quizzes);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories
  const categories = ["All", ...new Set(quizzes.map((q) => q.category))];

  // Handle search and category filter
  const handleSearch = (query) => {
    let filtered = quizzes.filter((q) =>
      q.title.toLowerCase().includes(query.toLowerCase())
    );

    if (selectedCategory !== "All") {
      filtered = filtered.filter((q) => q.category === selectedCategory);
    }

    setFilteredQuizzes(filtered);
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);

    let filtered = quizzes;

    if (category !== "All") {
      filtered = quizzes.filter((q) => q.category === category);
    }

    setFilteredQuizzes(filtered);
  };

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        Quiz Contests
      </h1>

      {/* Search Bar */}
      <SearchBar onSearch={handleSearch} />

      {/* Category Filter */}
      <div className="mb-4 max-w-md mx-auto">
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="w-full p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 outline-none focus:border-blue-600"
        >
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Quiz List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {filteredQuizzes.length > 0 ? (
          filteredQuizzes.map((quiz) => (
            <div
              key={quiz.id}
              className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                {quiz.title}
              </h2>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                Category: {quiz.category}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {quiz.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-200 dark:bg-blue-700 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-700 dark:text-gray-300 col-span-full">
            No quizzes found.
          </p>
        )}
      </div>
    </div>
  );
}
