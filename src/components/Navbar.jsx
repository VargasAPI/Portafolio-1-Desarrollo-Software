import React from "react";
import "../assets/styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">MiPortafolio</div>
      <ul className="nav-links">
        <li><a href="/">Inicio</a></li>
        <li><a href="/about">Sobre mí</a></li>
        <li><a href="/projects">Proyectos</a></li>
        <li><a href="/contact">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
