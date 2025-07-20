import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Stars } from "../../components/Stars.jsx";
import "../../components/Stars.css"

import "./register.css";

export const Registro = () => {
  const urlApi = "https://6740fd35d0b59228b7f1f288.mockapi.io/api/v1";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    else if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      password,
      createdAt: new Date().toISOString(),
      avatar: "https://avatar.iran.liara.run/public",
    };

    await fetch(`${urlApi}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    navigate("/jd/login");
  };

  return (
    
    <main className="login-page">
      <Stars />
      <div className="space-stars"></div>

      <div className="login-card">
        <h1 className="title">Regístrate</h1>

        <form onSubmit={onSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="name"
              value={name}
              onChange={onChange}
              required
              placeholder=" "
            />
            <label>Nombre de usuario</label>
          </div>

          <div className="input-group">
            <input
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              required
              placeholder=" "
            />
            <label>Correo electrónico</label>
          </div>

          <div className="input-group">
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              required
              placeholder=" "
            />
            <label>Contraseña</label>
          </div>

          <button type="submit">Registrarse</button>

          <div className="register-message">
            ¿Ya tienes una cuenta?
            <span onClick={() => navigate("/jd/login")}> Inicia sesión</span>
          </div>
        </form>
      </div>
    </main>
  );
};
