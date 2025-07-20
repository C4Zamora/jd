import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Stars } from "../../components/Stars.jsx";
import "./login.css";

export const Login = () => {
  const urlApi = "https://6740fd35d0b59228b7f1f288.mockapi.io/api/v1/";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${urlApi}/users`);
      const usersFromApi = await response.json();
      const user = usersFromApi.find(
        (user) => user.email === email && user.password === password
      );
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/jd/dashboard");
      } else {
        alert("Credenciales incorrectas. Inténtalo de nuevo.");
      }
    } catch (error) {
      console.error("Error al validar el usuario:", error);
      alert("Hubo un problema al validar tus credenciales.");
    }
  };

  return (
    <main className="login-page">
      <Stars />


      <div className="login-card glass-effect">
        <img src="/img/planeta.png" alt="planet" className="planet-bg" />

<div className="login-header">

  <h1 className="title">Bienvenido</h1>
</div>

        <form onSubmit={onSubmit}>
          <div className="input-group">
            <input
              type="email"
              name="email"
              required
              value={email}
              onChange={onChange}
              placeholder=" "
            />
            <label>Correo electrónico</label>
          </div>

          <div className="input-group">
            <input
              type="password"
              name="password"
              required
              value={password}
              onChange={onChange}
              placeholder=" "
            />
            <label>Contraseña</label>
          </div>

          <button type="submit" className="login-button">
            Ingresar
          </button>

          <div className="register-message">
            ¿No tienes una cuenta?{" "}
            <span onClick={() => navigate("/jd/registro")}>Regístrate</span>
          </div>
        </form>
      </div>
    </main>
  );
};
