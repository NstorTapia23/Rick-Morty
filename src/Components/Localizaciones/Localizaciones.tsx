import { useEffect, useState } from "react";
import { CardLocalizaciones } from "./CardLocalizaciones";
import type { Localizacion } from "./helpers/LocalizacionesType";

export function Localizaciones() {
  const [localizaciones, setLocalizaciones] = useState<Localizacion[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLocalizaciones = async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/location"
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
  }, []);
  if (loading) {
    return <div>Cargando...</div>;
  }
  return (
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
  );
}
