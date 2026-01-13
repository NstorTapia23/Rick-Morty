import { useEffect, useState } from "react";
import { CardLocalizaciones } from "./CardLocalizaciones";
import type { Localizacion } from "./helpers/LocalizacionesType";

export function Localizaciones() {
  const [localizaciones, setLocalizaciones] = useState<Localizacion[]>([]);
  const [loading, setLoading] = useState(true);
  const [pagina, setPagina] = useState(1);

  useEffect(() => {
    const fetchLocalizaciones = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/location?page=${pagina}`
        );
        if (response.ok) {
          const data = await response.json();
          setLocalizaciones(data.results);
        } else {
          console.error("Error al cargar localizaciones");
        }
      } catch (e) {
        throw new Error(e as string);
      } finally {
        setLoading(false);
      }
    };

    fetchLocalizaciones();
  }, [pagina]);
  if (loading) {
    return <div>Cargando...</div>;
  }
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
          disabled={pagina >= 7}
        >
          Siguiente
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-6 p-6 bg-gray-900 min-h-screen ">
        {localizaciones.map((locate) => {
          return (
            <CardLocalizaciones
              key={locate.id}
              name={locate.name}
              type={locate.type}
              dimension={locate.dimension}
            />
          );
        })}
      </div>
    </>
  );
}
