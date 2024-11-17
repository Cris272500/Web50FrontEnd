import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Index from "./components/Index";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./components/Component.css";

export default function App() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleView = () => setIsLogin(!isLogin);

  return (
    <Router>
      <div className="App">
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
        </Routes>
      </div>
    </Router>
  );
}
