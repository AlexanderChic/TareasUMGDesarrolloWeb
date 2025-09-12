// --- TODOS LOS IMPORTS AL INICIO ---
import { Routes, Route, Link, NavLink } from "react-router-dom";
import "./App.css";
import Programacion from "./pages/Programacion";
import BasesDatos from "./pages/BasesDatos";
import Estructuras from "./pages/Estructuras";
import Redes from "./pages/Redes";


const NAV_LINKS = [
  { to: "/", label: "🏠 Inicio", end: true },
  { to: "/programacion", label: "💻 Programación I" },
  { to: "/bases-datos", label: "🗄️ Bases de Datos" },
  { to: "/estructuras", label: "🔗 Estructuras de Datos" },
  { to: "/redes", label: "🌐 Redes" },
];

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary rounded-4 shadow-sm my-3 sticky-top">
      <div className="container-lg">
        <Link className="navbar-brand fw-bold" to="/">🎓 Cursos</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
          <span className="navbar-toggler-icon" />
        </button>

        <div id="mainNav" className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto gap-2">
            {NAV_LINKS.map((l) => (
              <li key={l.to} className="nav-item">
                <NavLink
                  to={l.to}
                  end={l.end}
                  className={({ isActive }) =>
                    "nav-link fw-semibold" + (isActive ? " active" : "")
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header className="text-center py-4" id="inicio">
      <h1 className="display-5 fw-bold text-body-emphasis mb-1">🎓 Cursos Finalizados</h1>
      <p className="lead text-secondary m-0">Ingeniería en Sistemas — Universidad Mariano Gálvez</p>
    </header>
  );
}

function Objective() {
  return (
    <section className="bg-info text-white rounded-4 p-4 p-md-5 shadow-sm">
      <h2 className="h2 fw-bold text-center mb-3">🎯 Objetivo del Sitio Web</h2>
      <p className="fs-5 text-justify">
        Este sitio web presenta de forma organizada los cursos finalizados, con puntos clave y recursos por materia.
      </p>
    </section>
  );
}

function Home() {
  // Tu grid original de cursos puede quedarse aquí como landing
  return (
    <>
      <Objective />
      {/* Aquí podrías reusar tu CoursesGrid si quieres */}
    </>
  );
}



function Footer() {
  return (
    <footer className="bg-dark text-white rounded-4 p-4 p-md-5 mt-4 shadow-sm">
      <h3 className="h4 text-center fw-bold mb-4">👥 Integrantes del Equipo</h3>
      <div className="mx-auto" style={{ maxWidth: 680 }}>
        <div className="p-4 rounded-3 border border-2 team-card">
          <h4 className="h5 m-0 text-white">👤 Francisco Alexander Chic Barrios</h4>
          <p className="text-light m-0">📋 Carnet: 9490-22-2513</p>
          <h4 className="h5 m-0 text-white">👤 Herbert Daniel Morataya</h4>
          <p className="text-light m-0">📋 Carnet: 9490-22-423</p>


        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="App app-bg-min">
      <Hero />
      <div className="container-lg pb-5">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programacion" element={<Programacion />} />
          <Route path="/bases-datos" element={<BasesDatos />} />
          <Route path="/estructuras" element={<Estructuras />} />
          <Route path="/redes" element={<Redes />} />
          <Route path="*" element={<div className="alert alert-warning mt-4">Página no encontrada.</div>} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}