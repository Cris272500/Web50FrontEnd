import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-card">
        <header className="about-card-header">
          <h1 className="about-title">Arena</h1>
        </header>
        <div className="about-card-content">
          <div className="about-description">
            <h2 className="about-subtitle">Descripción del Proyecto</h2>
            <p className="about-text">
              SportHub Arena es el espacio donde los deportistas se encuentran para competir y mejorar.
              Aquí podrás organizar torneos, participar en eventos y seguir el progreso de tus competidores
              favoritos en tiempo real. Nuestra plataforma está diseñada para hacer que la gestión deportiva
              sea más accesible y eficiente para todos.
            </p>
            <div className="about-grid">
              <div className="about-grid-item">
                <h3 className="about-grid-title">Torneos</h3>
                <p className="about-grid-text">
                  Organiza y participa en competencias de diferentes niveles.
                </p>
              </div>
              <div className="about-grid-item">
                <h3 className="about-grid-title">Estadísticas</h3>
                <p className="about-grid-text">
                  Seguimiento detallado de rendimiento y resultados.
                </p>
              </div>
              <div className="about-grid-item">
                <h3 className="about-grid-title">Comunidad</h3>
                <p className="about-grid-text">
                  Conecta con otros deportistas y entrenadores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
