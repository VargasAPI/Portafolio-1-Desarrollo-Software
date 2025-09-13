import React from "react";
import "../assets/styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
        <a href="/">Inicio</a>
        <a href="/about">Sobre mí</a>
        <a href="/projects">Proyectos</a>
       
    </nav>
  );
}

export default Navbar;
