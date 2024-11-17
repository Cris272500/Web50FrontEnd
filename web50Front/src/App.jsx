// App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Index from "./components/Index";
import About from "./components/About";
import Navbar from "./components/Navbar";
import "./components/Component.css";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const toggleView = () => setIsLogin(!isLogin);

  return (
    <Router>
      <MainApp isLogin={isLogin} toggleView={toggleView} />
    </Router>
  );
}

function MainApp({ isLogin, toggleView }) {
  const location = useLocation();

  return (
    <div className="App">
      {/* Renderiza el Navbar solo si no estás en la ruta raíz */}
      {location.pathname !== "/" && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={
            isLogin ? (
              <Login onSwitch={toggleView} />
            ) : (
              <Register onSwitch={toggleView} />
            )
          }
        />
        <Route path="/index" element={<Index />} />
        <Route path="/about-us" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
