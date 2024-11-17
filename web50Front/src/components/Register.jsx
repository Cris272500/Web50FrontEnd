import React, { useState } from "react";
import "./Component.css";
import { useNavigate } from "react-router-dom";

export default function Register({ onSwitch }) {

    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const password = event.target.password.value;

    if (password.length < 8) {
        setErrorMessage('La contraseña debe tener al menos 8 caracteres.');
        return;
    }

    setErrorMessage('');
    console.log("Registrarse");
    navigate("/index");
  };

  return (
    <div className="container">
    <div className="card">
      <header className="card-header">
        <h1 className="card-title">Registro</h1>
        <p className="card-description">Crea una nueva cuenta en SportHub</p>
      </header>
      <div className="card-content">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Nombre de usuario</label>
            <input
              id="username"
              placeholder="Usuario"
              required
              className="input"
            />
          </div>

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
            {errorMessage && <p className="error-message" style={{ color: 'red' }}>{errorMessage}</p>}
          </div>

          <div className="form-group">
            <label>Tipo</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="tipo"
                  value="jugador"
                  defaultChecked
                />
                Jugador
              </label>
              <label>
                <input type="radio" name="tipo" value="entrenador" />
                Entrenador
              </label>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="birth">Fecha de nacimiento</label>
            <input id="birth" type="date" required className="input" />
          </div>

          <button type="submit" className="btn btn-submit">
            Registrarse
          </button>

          <div className="toggle-text">
            <button type="button" onClick={onSwitch} className="btn btn-link">
              ¿Ya tienes cuenta? Inicia sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
}
