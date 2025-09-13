import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import "./assets/styles/App.css";

function App() {
  return (
    <>
      <div className="contenedor">
        <div className="app-container">
          <header className="header">
            <div className="info-personal">
              <h1>Jose Vargas</h1>
              <h2>Full Stack Engineer</h2>
              <p>
                This is a work experience lab for my Desarrollo de Software
                course. My goal is to practice my current front-end skills, and
                I might use this lab as inspiration for my future portfolio.
              </p>
              <nav className="nav">
                <ul>
                  <li>ABOUT</li>
                  <li>EXPERIENCE</li>
                  <li>PROJECTS</li>
                  <li>TEC COURSE</li>
                </ul>
              </nav>
            </div>
            <ul className="social-media">
              <li>
                <a
                  href="https://github.com/VargasAPI?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={25} />
                </a>
              </li>
            <li>
                <a
                href="https://www.linkedin.com/in/jose-andres-solano-vargas-204149351"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={25} />
              </a>


            </li>
            
              <li>
                <FaInstagram size={25} />
              </li>
              <li>
                <FaEnvelope size={25} />
              </li>
            </ul>
          </header>

          <main className="right-panel">
            <section id="about">Sobre mí</section>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
