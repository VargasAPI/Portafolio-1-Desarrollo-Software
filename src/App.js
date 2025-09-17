import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import "./assets/styles/App.css";
import perfilImg from './assets/img/perfil.jpeg';


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
                  <li>
                    
                    <a href="#about">ABOUT</a>
                  </li>
                  <li>
                  
                    <a href="#experience">EXPERIENCE</a>
                  </li>

                  <li>
                   
                    <a href="#tec_courses">TEC COURSE</a>
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
                <FaInstagram size={25} />
              </li>
              <li>
                <FaEnvelope size={25} />
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
                  Soy un desarrollador apasionado por crear soluciones digitales
                  innovadoras que combinan diseño elegante con funcionalidad
                  robusta. Mi enfoque se centra en desarrollar aplicaciones web
                  que no solo se vean increíbles, sino que también ofrezcan una
                  experiencia de usuario excepcional.
                </p>

                <p className="nosotros-intro">
                  Actualmente estoy cursando{" "}
                  <strong>
                    <spam>Ingenieria de computacion</spam>
                  </strong>{" "}
                  en el
                  <strong>
                    <spam> Tecnológico de Costa Rica</spam>
                  </strong>
                  , donde he desarrollado sólidas habilidades en tecnologías
                  tanto de frontend como backend. Mi experiencia abarca desde la
                  creación de interfaces de usuario intuitivas hasta el
                  desarrollo de sistemas backend escalables.
                </p>

                <p className="nosotros-description1">
                  En mis proyectos, me especializo en crear experiencias web
                  modernas utilizando
                  <strong>
                    <spam> React</spam>
                  </strong>
                  ,
                  <strong>
                    <spam>JavaScript</spam>
                  </strong>
                  , y
                  <strong>
                    <spam> Node.js</spam>
                  </strong>
                  . Disfruto trabajando en equipos colaborativos donde puedo
                  contribuir con ideas creativas y soluciones técnicas
                  efectivas.
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
                        <span className="company-name">Klaviyo ↗</span>
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
                </div>
              </div>
            </section>

            {/* Estructura para la seccion de Tec. */}
            <section id="tec_courses" className="courses-section">



            </section>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
