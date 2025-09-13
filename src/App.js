import React from "react";
import Navbar from "./components/Navbar";
import "./assets/styles/App.css";

function App() {
  return (
    <>
      <header>
        <h1>VargasAPI11</h1>
      </header>

       <div class="contenedor-navegacion">
         <Navbar />   {/* Componente nav de component*/}


       </div>
     
      <main>
        <h1>Bienvenido a mi portafolio 🚀</h1>
      </main>
    </>
  );
}

export default App;
