import React, { useState, useMemo } from "react";
import { coursesData } from "../data/coursesData";
import "../assets/styles/Courses.css";

function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [filterCourse, setFilterCourse] = useState("");

  const handleCourseClick = (course) => {
    setSelectedCourse(selectedCourse?.id === course.id ? null : course);
  };

  // Filtrar cursos basado en selección
  const filteredCourses = useMemo(() => {
    if (!filterCourse) return coursesData;
    return coursesData.filter(course => course.id === parseInt(filterCourse));
  }, [filterCourse]);

  /*Segun su tipo se le asigna color */
  const getTipoEvaluacionColor = (tipo) => {
    const colors = {
      Laboratorio: "#10b981",
      Proyecto: "#3b82f6",
      Tarea: "#f59e0b",
      Investigacion: "#8b5cf6",
      Quiz: "#ef4444",
      Otro: "#6b7280",
    };
    return colors[tipo] || "#6b7280";
  };
  /*Segun su estado se le asigna color */
  const getEstadoColor = (estado) => {
    const colors = {
      Completado: "#10b981",
      "En desarrollo": "#f59e0b",
      Pendiente: "#ef4444",
    };
    return colors[estado] || "#6b7280";
  };
  /*Fechas correspondientes */
  const formatearFecha = (fecha) => {
    const [dia, mes, año] = fecha.split("/");
    const meses = [
      "Ene",
      "Feb",
      "Mar",
      "Abr",
      "May",
      "Jun",
      "Jul",
      "Ago",
      "Sep",
      "Oct",
      "Nov",
      "Dic",
    ];
    return `${dia} ${meses[parseInt(mes) - 1]} ${año}`;
  };

  /*Estructura principal */
  return (
    <div className="courses-container">
      {/* Botón regresar */}
      <button className="back-button" onClick={() => window.history.back()}>
        <span className="back-arrow">←</span>
        <span className="back-text">Regresar</span>
      </button>

      {/* Header principal */}
      <div className="courses-header">
        <h1>Cursos Académicos</h1>
        <p>Explora los cursos completados y sus proyectos desarrollados</p>
      </div>

      {/* Filtro simple */}
      <div className="simple-filter">
        <label htmlFor="course-select">Filtrar por curso:</label>
        <select 
          id="course-select"
          value={filterCourse}
          onChange={(e) => setFilterCourse(e.target.value)}
        >
          <option value="">Todos los cursos</option>
          {coursesData.map(course => (
            <option key={course.id} value={course.id}>
              {course.codigo} - {course.nombre}
            </option>
          ))}
        </select>
      </div>
      
      {/* Estructura de cursos filtrados */}
      <div className="courses-grid">
        {filteredCourses.map((course) => (
            <div key={course.id} className="course-card-wrapper">
              <div
                className={`course-card ${
                  selectedCourse?.id === course.id ? "active" : ""
                }`}
                onClick={() => handleCourseClick(course)}
              >
                <div className="course-code">{course.codigo}</div>
                <h3 className="course-name">{course.nombre}</h3>
                <div className="course-semester">{course.semestre}</div>
                <p className="course-description">{course.descripcion}</p>
                <div className="course-indicator">
                  {course.proyectos ? (
                    <span>{course.proyectos.length} proyectos</span>
                  ) : (
                    <span className="sin-contenido">Sin contenido</span>
                  )}
                  <div className="arrow-icon">
                    {selectedCourse?.id === course.id ? "▼" : "▶"}
                  </div>
                </div>
              </div>

              {/* Módulo de proyectos con ayuda de chat */}
              {selectedCourse?.id === course.id && (
                <div className="projects-module">
                  {course.proyectos ? (
                    <>
                      <div className="projects-header">
                        <h4>Proyectos del Curso</h4>
                        <span className="projects-count">
                          {course.proyectos.length} proyectos
                        </span>
                      </div>
                      <div className="projects-grid">
                        {course.proyectos.map((proyecto) => (
                          <div key={proyecto.id} className="project-card">
                            <div className="project-header">
                              <div className="project-title-section">
                                <h5 className="project-title">
                                  {proyecto.nombre}
                                </h5>
                                <div className="project-badges">
                                  <span
                                    className="badge tipo-evaluacion"
                                    style={{
                                      backgroundColor: getTipoEvaluacionColor(
                                        proyecto.tipoEvaluacion
                                      ),
                                    }}
                                  >
                                    {proyecto.tipoEvaluacion}
                                  </span>
                                  <span
                                    className="badge estado"
                                    style={{
                                      backgroundColor: getEstadoColor(
                                        proyecto.estado
                                      ),
                                    }}
                                  >
                                    {proyecto.estado}
                                  </span>
                                </div>
                              </div>
                              <div className="project-date">
                                <span className="date-label">Entrega:</span>
                                <span className="date-value">
                                  {formatearFecha(proyecto.fechaEntrega)}
                                </span>
                              </div>
                            </div>

                            <div className="project-body">
                              <p className="project-description">
                                {proyecto.descripcion}
                              </p>

                              <div className="project-technologies">
                                <span className="tech-label">Tecnologías:</span>
                                <div className="tech-tags">
                                  {proyecto.tecnologias.map((tech, index) => (
                                    <span key={index} className="tech-tag">
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                            {/* Footer de los proyectos*/}
                            <div className="project-footer">
                              <div className="project-links">
                                {proyecto.repositorio && (
                                  <a
                                    href={proyecto.repositorio}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-link btn-repository"
                                  >
                                    <span className="link-icon">📁</span>
                                    Repositorio
                                  </a>
                                )}
                                {proyecto.sitioWeb && (
                                  <a
                                    href={
                                      proyecto.sitioWeb.startsWith("http")
                                        ? proyecto.sitioWeb
                                        : `https://${proyecto.sitioWeb}`
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-link btn-demo"
                                  >
                                    <span className="link-icon">🚀</span>
                                    Ver Demo
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    <div className="no-content-message">
                      {/* Si el curso no tiene contenido: */}
                      <div className="no-content-icon">📚</div>
                      <h4>Sin contenido disponible</h4>
                      <p>
                        Este curso aún no tiene proyectos o contenido para
                        mostrar.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Courses;