import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFilePdf,
} from "react-icons/fa";
import "../assets/styles/Home.css";
import perfilImg from "../assets/img/perfil.jpeg";
import TechSkills from "./TechSkills";


import { Link } from "react-router-dom";

// Función para manejar la impresión a PDF
const handlePrintPDF = () => {
  window.print();
};

function Home() {
  return (
    <div className="contenedor">
      <div className="app-container">
        <header className="header">
          <div className="info-personal">
            <h1>Jose Vargas</h1>
            <h2>Full Stack Engineer</h2>
            <p>
              This is a work experience lab for my Desarrollo de Software
              course. My goal is to practice my current front-end skills, and I
              might use this lab as inspiration for my future portfolio.
            </p>
            <nav className="nav">
              <ul>
                <li>
                  <a href="#about">ABOUT</a>
                </li>
                <li>
                  <a href="#experience">EXPERIENCE</a>
                </li>

                <li>
                  <Link to="/Courses">TEC COURSE</Link>
                </li>

                <li>
                 <Link to="/Comments">COMMENTS</Link>
                </li>
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
               <a
                href=" https://www.instagram.com/ing_vargass?igsh=MXFtZHk1N3duMHVrYw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
              >
              <FaInstagram size={25} />
              </a>
            </li>
           
            <li>
              <button
                onClick={handlePrintPDF}
                className="pdf-button"
                title="Imprimir como PDF"
              >
                <FaFilePdf size={25} />
              </button>
            </li>
          </ul>
        </header>

        {/* Panel-derecho */}
        <main className="panel-derecho">
          <section id="about" className="nosotros-section">
            <div className="about-image">
              <img
                src={perfilImg}
                alt="Foto de perfil - Desarrollador"
                className="profile-photo"
              />
            </div>
            <div className="contenido-section">
              <p className="nosotros-intro">
                I am a developer passionate about creating innovative digital solutions that combine elegant design with robust functionality. My focus is on developing web applications that not only look amazing but also provide an exceptional user experience.
              </p>

             <p className="nosotros-intro">
  I am currently pursuing a
  <strong>
    <span> Computer Engineering </span>
  </strong>
  degree at the
  <strong>
    <span> Tecnologico de Costa Ricas</span>
  </strong>
  , where I have developed strong skills in both frontend and backend
  technologies. My experience ranges from creating intuitive user interfaces
  to developing scalable backend systems.
</p>

<p className="nosotros-description1">
  In my projects, I specialize in building modern web experiences using
  <strong>
    <span> React</span>
  </strong>
  ,
  <strong>
    <span> JavaScript</span>
  </strong>
  , and
  <strong>
    <span> Node.js</span>
  </strong>
  . I enjoy working in collaborative teams where I can contribute with
  creative ideas and effective technical solutions.
</p>

<p className="tech-description1">
  <TechSkills />
</p>

            </div>
          </section>

          {/* Estructura para la seccion de Experiencia(empleos). */}
          <section id="experience" className="experience-section">
            <div className="contenido-section">
              <h3 className="section-title">Experience</h3>

              {/* Experiencia 1 */}
              <div className="experience-item">
                <div className="experience-header">
                  <div className="experience-period">
                    <span className="period-text">2025 — PRESENT</span>
                  </div>
                  <div className="experience-content">
                    <div className="job-title-company">
                      <h4 className="job-title">
                        Senior Frontend Engineer, Accessibility
                      </h4>
                      <span className="company-name">TecDigital ↗</span>
                    </div>
                    <p className="job-description">
                      working on Tec-digital(ejemplo)
                    </p>
                    <div className="tech-tags">
                      <span className="tech-tag">JavaScript</span>
                      <span className="tech-tag">TypeScript</span>
                      <span className="tech-tag">React</span>
                      <span className="tech-tag">MySql</span>
                    </div>
                  </div>
                </div>

                <div className="experience-header">
                  <div className="experience-period">
                    <span className="period-text">2022 — 2023</span>
                  </div>
                  <div className="experience-content">
                    <div className="job-title-company">
                      <h4 className="job-title">
                        Cajero – Atención al Cliente
                      </h4>
                      <span className="company-name">Almacen el Rey ↗</span>
                    </div>
                    <p className="job-description">
                      Encargado de la gestión de cobros y pagos, arqueo de caja,
                      registro de transacciones en el sistema, control de
                      facturas y apoyo en tareas administrativas. Atención al
                      cliente para resolver consultas y garantizar un servicio
                      eficiente y confiable.
                    </p>
                    <div className="tech-tags">
                      <span className="tech-tag">Responsable</span>
                      <span className="tech-tag">Resolutivo</span>
                      <span className="tech-tag">Trabajo en equipo</span>
                      <span className="tech-tag">
                        Manejo básico de sistemas informáticos
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
export default Home;
