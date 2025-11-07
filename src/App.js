import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Register from "./pages/Register";

import Navbar from "./components/Navbar";
import Loader from "./components/Loader";

// Pages
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import About from "./pages/About";
import Login from "./pages/Login";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // jab page refresh hota hai, loader 1.5 sec dikhega
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // ✅ Loader screen
  if (loading) {
    return <Loader />;
  }

  return (
    <Router>
      <Navbar user={null} />  {/* Baad me user ka data pass kar dena */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </Router>
  );
}

export default App;
