import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="h-16 bg-indigo-600 text-white flex items-center px-6">
      <nav className="flex gap-6">
        <Link to="/">Inicio</Link>
        <Link to="/personajes">Personajes</Link>
        <Link to="/localizaciones">Localizaciones</Link>
        <Link to="/episodios">Episodios</Link>
        <Link to="/filtro">Filtro Personajes</Link>
      </nav>
    </header>
  );
}
