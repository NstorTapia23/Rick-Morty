import { useEffect, useState } from "react";
import type { Personaje } from "./helpers/PersonajeType";
import { PersonajesCard } from "./PersonajesCard";

export function Personajes() {
  const [personajes, setPersonajes] = useState<Personaje[]>([]);
  const [pagina, setPagina] = useState(1);

  useEffect(() => {
    const fetchPersonaje = async () => {
      try {
        if (pagina < 1) return;
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?page=${pagina}`
        );
        if (response.ok) {
          const data = await response.json();
          setPersonajes(data.results);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchPersonaje();
  }, [pagina]);

  return (
    <>
      <div className="flex justify-center gap-4 p-4  bg-gray-900">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setPagina(pagina - 1)}
          disabled={pagina < 2}
        >
          Anterior
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setPagina(pagina + 1)}
        >
          Siguiente
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-6 p-6 bg-gray-900 min-h-screen">
        {personajes.map((personaje) => (
          <PersonajesCard
            key={personaje.id}
            name={personaje.name}
            status={personaje.status}
            species={personaje.species}
            type={personaje.type}
            gender={personaje.gender}
            image={personaje.image}
          />
        ))}
      </div>
    </>
  );
}
