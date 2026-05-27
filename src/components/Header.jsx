import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <nav className="nav">
        <a className="brand" href="#inicio" aria-label="Inicio" onClick={closeMenu}>
          <span className="brand-mark">PT</span>
          <span className="brand-text">Process Tools</span>
        </a>

        <button
          className="menu-button"
          aria-label="Abrir menú"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <a href="#enfoque" onClick={closeMenu}>Enfoque</a>
          <a href="#proyectos" onClick={closeMenu}>Herramientas</a>
          <a href="#casos" onClick={closeMenu}>Procesos</a>
          <a href="#metodo" onClick={closeMenu}>Método</a>
          <a href="#contacto" className="nav-cta" onClick={closeMenu}>Contacto</a>
        </div>
      </nav>
    </header>
  );
}
