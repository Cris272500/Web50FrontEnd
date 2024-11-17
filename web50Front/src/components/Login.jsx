import React from "react";
import "./Component.css";

export default function Login({ onSwitch }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Iniciar sesion");
  };

  return (
    <div className="container">
    <div className="card">
      <header className="card-header">
        <h1 className="card-title">Iniciar Sesión</h1>
        <p className="card-description">Ingresa a tu cuenta de SportHub</p>
      </header>
      <div className="card-content">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="correo@ejemplo.com"
              required
              className="input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input id="password" type="password" required className="input" />
          </div>

          <button type="submit" className="btn btn-submit">
            Iniciar Sesión
          </button>

          <div className="toggle-text">
            <button type="button" onClick={onSwitch} className="btn btn-link">
              ¿No tienes cuenta? Regístrate
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
}
