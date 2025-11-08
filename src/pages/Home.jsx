import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";

export default function Home() {
  const contests = [
    {
      id: 1,
      title: "JavaScript Mastery",
      desc: "Challenge your JS skills and become a pro developer.",
      img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "React Battle",
      desc: "Build dynamic UIs and test your React knowledge.",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Node.js Ninja",
      desc: "Backend challenges to sharpen your Node.js skills.",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "Python Quiz",
      desc: "From basics to advanced — test your Python IQ.",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      title: "Data Science Test",
      desc: "Test your data analysis and ML model understanding.",
      img: "https://images.unsplash.com/photo-1581091012184-5c8af2af0a3b?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-center px-4 pt-20">
      {/* Welcome Section */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-green-600 text-white p-8 rounded-2xl shadow-2xl w-full max-w-3xl"
      >
        <h1 className="text-4xl font-extrabold mb-2">Welcome to the Quiz!</h1>
        <p className="text-lg font-light">Test your knowledge and have fun.</p>
      </motion.div>

      {/* Image Section */}
      <motion.img
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        whileHover={{ scale: 1.05 }}
        src="https://images.unsplash.com/photo-1600195077070-7c815f540a3b?auto=format&fit=crop&w=900&q=80"
        alt="Quiz Context"
        className="mt-10 w-full max-w-2xl rounded-2xl shadow-xl"
      />

      {/* Explore Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.scrollTo({ top: 700, behavior: "smooth" })}
        className="mt-10 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition duration-300 shadow-lg"
      >
        Explore Quiz Contests
      </motion.button>

      {/* Contest Section */}
      <div className="mt-16 w-full max-w-6xl">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          Featured Quiz Contests
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contests.map((contest, index) => (
            <motion.div
              key={contest.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
            >
              <img
                src={contest.img}
                alt={contest.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                  {contest.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  {contest.desc}
                </p>
                <button
                  onClick={() => (window.location.href = "/quiz")}
                  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg transition"
                >
                  Start Quiz
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 w-full bg-blue-600 dark:bg-blue-800 text-white py-6 rounded-t-2xl shadow-inner">
        <p className="text-sm mb-3">
          © {new Date().getFullYear()} QuizTest | Designed by{" "}
          <span className="font-bold">Abhijeet Gupta</span>
        </p>
        <div className="flex justify-center gap-6">
          <motion.a
            href="https://github.com/"
            target="_blank"
            whileHover={{ scale: 1.2, rotate: 10 }}
            className="hover:text-gray-200 transition"
          >
            <Github size={28} />
          </motion.a>
          <motion.a
            href="https://linkedin.com/"
            target="_blank"
            whileHover={{ scale: 1.2, rotate: -10 }}
            className="hover:text-gray-200 transition"
          >
            <Linkedin size={28} />
          </motion.a>
          <motion.a
            href="https://instagram.com/"
            target="_blank"
            whileHover={{ scale: 1.2, rotate: 10 }}
            className="hover:text-gray-200 transition"
          >
            <Instagram size={28} />
          </motion.a>
        </div>
      </footer>
    </div>
  );
}
