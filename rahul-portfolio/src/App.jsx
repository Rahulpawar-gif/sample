import React from "react";

function App() {
  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: Arial, sans-serif;
          background: #0f172a;
          color: white;
        }

        .portfolio {
          min-height: 100vh;
        }

        .navbar {
          width: 100%;
          padding: 20px 8%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #0f172a;
          border-bottom: 1px solid #1e293b;
        }

        .navbar h2 {
          font-size: 25px;
        }

        .nav-links {
          display: flex;
          gap: 30px;
        }

        .nav-links a {
          color: white;
          text-decoration: none;
          font-size: 16px;
          transition: 0.3s;
        }

        .nav-links a:hover {
          color: #38bdf8;
        }

        .hero {
          min-height: calc(100vh - 75px);
          padding: 60px 8%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 50px;
        }

        .hero-content {
          max-width: 650px;
        }

        .intro {
          color: #38bdf8;
          font-size: 20px;
          margin-bottom: 10px;
        }

        .hero h1 {
          font-size: 65px;
          margin-bottom: 10px;
        }

        .hero h2 {
          font-size: 28px;
          color: #cbd5e1;
          margin-bottom: 20px;
        }

        .description {
          color: #94a3b8;
          font-size: 18px;
          line-height: 1.7;
          margin-bottom: 30px;
        }

        .buttons {
          display: flex;
          gap: 15px;
        }

        .btn {
          padding: 13px 25px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: bold;
          transition: 0.3s;
        }

        .primary {
          background: #38bdf8;
          color: #0f172a;
        }

        .primary:hover {
          background: #0ea5e9;
          transform: translateY(-3px);
        }

        .secondary {
          border: 1px solid #38bdf8;
          color: #38bdf8;
        }

        .secondary:hover {
          background: #38bdf8;
          color: #0f172a;
        }

        .hero-image {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-circle {
          width: 320px;
          height: 320px;
          border-radius: 50%;
          background: linear-gradient(135deg, #38bdf8, #6366f1);
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 0 60px rgba(56, 189, 248, 0.3);
        }

        .image-circle span {
          font-size: 90px;
          font-weight: bold;
        }

        @media (max-width: 900px) {
          .hero {
            flex-direction: column;
            text-align: center;
            padding-top: 70px;
          }

          .buttons {
            justify-content: center;
          }

          .hero h1 {
            font-size: 50px;
          }

          .hero-image {
            margin-top: 30px;
          }
        }

        @media (max-width: 600px) {
          .navbar {
            flex-direction: column;
            gap: 20px;
          }

          .nav-links {
            gap: 15px;
            flex-wrap: wrap;
            justify-content: center;
          }

          .hero {
            padding: 50px 20px;
          }

          .hero h1 {
            font-size: 40px;
          }

          .hero h2 {
            font-size: 22px;
          }

          .description {
            font-size: 16px;
          }

          .buttons {
            flex-direction: column;
          }

          .image-circle {
            width: 230px;
            height: 230px;
          }

          .image-circle span {
            font-size: 65px;
          }
        }
      `}</style>

      <div className="portfolio">

        <nav className="navbar">
          <h2>Rahul Pawar</h2>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <section id="home" className="hero">

          <div className="hero-content">

            <p className="intro">
              Hello, I'm
            </p>

            <h1>
              Rahul Pawar
            </h1>

            <h2>
              AI Full Stack Web Development Fresher
            </h2>

            <p className="description">
              Passionate about web development and eager to apply my skills
              in real-world projects. Open to internship and job opportunities.
            </p>

            <div className="buttons">

              <a href="#projects" className="btn primary">
                View Projects
              </a>

              <a href="#contact" className="btn secondary">
                Contact Me
              </a>

            </div>

          </div>

          <div className="hero-image">

            <div className="image-circle">
              <span>RP</span>
            </div>

          </div>

        </section>

      </div>
    </>
  );
}

export default App;