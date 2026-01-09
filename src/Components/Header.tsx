import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="h-16 bg-indigo-600 text-white flex items-center px-6">
      <nav className="flex gap-6">
        <Link to="/">Inicio</Link>
        <Link to="/personajes">Personajes</Link>
        <Link to="/localizaciones">Localizaciones</Link>
      </nav>
    </header>
  );
}
