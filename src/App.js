import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
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
                <a className="nav-link" href="#">
                  Services
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
      </nav>

      {/* Hero Section */}
      <header className="bg-dark text-white text-center d-flex align-items-center justify-content-center vh-100">
        <div className="container">
          <h1 className="display-4 fw-bold">Innovating the Future</h1>
          <p className="lead">We provide cutting-edge IoT & software solutions tailored for you.</p>
          <a href="#" className="btn btn-warning btn-lg mt-3">
            Get Started
          </a>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Our Services</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card shadow-lg">
                <div className="card-body text-center">
                  <h5 className="card-title">IoT Solutions</h5>
                  <p className="card-text">Smart automation for industries, homes, and businesses.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-lg">
                <div className="card-body text-center">
                  <h5 className="card-title">Web & Mobile Apps</h5>
                  <p className="card-text">Custom-built applications for businesses and startups.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-lg">
                <div className="card-body text-center">
                  <h5 className="card-title">AI & Machine Learning</h5>
                  <p className="card-text">Intelligent solutions for data-driven decision-making.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-center text-white py-3">
        <p className="mb-0">&copy; 2025 Zero Byte Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
