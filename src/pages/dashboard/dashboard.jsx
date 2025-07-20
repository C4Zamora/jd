// Dashboard.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaMicrophone, FaSearch,FaCamera, FaGamepad, FaBars, FaSignOutAlt } from "react-icons/fa";
import "./dashboard.css";

export const Dashboard = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const user = JSON.parse(localStorage.getItem("user"));
  const [searchQuery, setSearchQuery] = useState('');
  const [messages, setMessages] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/jd/login");
  };

  return (
    <div className={`dashboard-layout ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
      {/* Sidebar */}
      <aside className={`sidebar-panel ${isSidebarOpen ? "open" : "closed"}`}>
        <div className="sidebar-header">
          <img src="/img/Icon_JD.png" alt="planet" className="sidebar-title" />
        </div>

        <nav className="nav-section">
          <button className="nav-item">
            <FaSearch className="nav-icon" />
            {isSidebarOpen && <span>Buscar</span>}
          </button>
          <button className="nav-item">
            <FaCamera className="nav-icon" />
            {isSidebarOpen && <span>Identificador</span>}
          </button>
          <button className="nav-item">
            <FaGamepad className="nav-icon" />
            {isSidebarOpen && <span>Juegos</span>}
          </button>
        </nav>

        
        <button className="logout-btn" onClick={handleLogout}>
          <FaSignOutAlt />
          {isSidebarOpen && <span>Cerrar sesión</span>}
        </button>
      </aside>

      {/* Main content */}
      <main className="main-dashboard">
        <header className="top-bar">
          <button className="toggle-btn" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <FaBars />
          </button>
          <h1 className="welcome-text">
            Bienvenido{user?.name ? `, ${user.name}` : ""}
          </h1>
        </header>
        <section className="dashboard-body">
  <div className="chat-container">
    {/* Mensajes en la parte superior */}
    <div className="chat-messages-fixed">
      {messages.map((msg, index) => (
        <div key={index} className="chat-message">
          {msg}
        </div>
      ))}
    </div>

    {/* Barra de búsqueda fija abajo */}
    <div className="search-bar-fixed-bottom">
      <input
        type="text"
        className="search-input-full"
        placeholder="Buscar..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            setMessages([...messages, searchQuery]);
            setSearchQuery('');
          }
        }}
      />
      <FaMicrophone className="mic-icon-full" />
    </div>
  </div>
</section>

        


        
      </main>
    </div>
  );
};
