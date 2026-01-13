import { useEffect, useState } from "react";
import type { Episodio } from "./Helpers/Episodios";
import { EpisodiosCard } from "./EpisodiosCard";

export function Episodios() {
  const [episodios, setEpisodios] = useState<Episodio[]>([]);
  const [pagina, setPagina] = useState(1);
  useEffect(() => {
    const fetchEpisodios = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/episode?page=${pagina}`
        );
        const data = await response.json();
        setEpisodios(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchEpisodios();
  }, [pagina]);

  return (
    <div className="flex flex-wrap justify-center gap-6 p-6 bg-gray-900 min-h-screen ">
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
        disabled={pagina >= 3}
      >
        Siguiente
      </button>
      <div />
      <div className="flex flex-wrap justify-center gap-6 p-6 bg-gray-900 min-h-screen ">
        {episodios.map((episodio) => (
          <EpisodiosCard
            key={episodio.id}
            id={episodio.id}
            name={episodio.name}
            air_date={episodio.air_date}
            episode={episodio.episode}
          />
        ))}
      </div>
    </div>
  );
}
