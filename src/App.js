import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Navbar */}
      <motion.nav
        className={`navbar navbar-expand-lg navbar-dark bg-dark fixed-top ${scrolled ? "shadow-lg" : ""}`}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <a className="navbar-brand fw-bold text-warning" href="#">
            Zero Byte Solutions
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <header className="bg-dark text-white text-center d-flex align-items-center justify-content-center vh-100">
        <motion.div
          className="container"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="display-4 fw-bold">Innovating the Future</h1>
          <p className="lead">We provide cutting-edge IoT & software solutions tailored for you.</p>
          <motion.a
            href="#about"
            className="btn btn-warning btn-lg mt-3"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Learn More
          </motion.a>
        </motion.div>
      </header>

      {/* About Us Section */}
      <section id="about" className="py-5">
        <div className="container">
          <motion.h2
            className="text-center mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Us
          </motion.h2>
          <motion.div
            className="row justify-content-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="col-md-8">
              <p className="text-center">
                Zero Byte Solutions is a leading technology firm specializing in IoT, web development, and AI-powered
                solutions. Our mission is to transform ideas into reality by providing high-quality, scalable software
                and automation services.
              </p>
              <p className="text-center">
                We believe in innovation, efficiency, and customer satisfaction, making technology accessible for
                businesses of all sizes. Whether you need a smart automation system, a custom-built mobile app, or an
                AI-driven analytics platform, we’ve got you covered.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        className="bg-dark text-center text-white py-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="mb-0">&copy; 2023 Zero Byte Solutions. All rights reserved.</p>
      </motion.footer>
    </div>
  );
}

export default App;
