import { useState } from "react";
import type { Personaje } from "../Personajes/helpers/PersonajeType";
import { PersonajesCard } from "../Personajes/PersonajesCard";
export function Filtro() {
  const [personajes, setPersonajes] = useState({
    nombre: "",
    genero: "",
    tipo: "",
    especie: "",
    origen: "",
    estado: "",
  });
  const [personajesFiltrados, setPersonajesFiltrados] = useState<Personaje[]>(
    []
  );
  const buildQuery = () => {
    const params = new URLSearchParams();

    if (personajes.nombre) params.append("name", personajes.nombre);
    if (personajes.genero) params.append("gender", personajes.genero);
    if (personajes.estado) params.append("status", personajes.estado);

    return params.toString();
  };
  function functionMap() {
    {
      return personajesFiltrados.map((personaje) => (
        <PersonajesCard
          key={personaje.id}
          name={personaje.name}
          status={personaje.status}
          species={personaje.species}
          type={personaje.type}
          gender={personaje.gender}
          image={personaje.image}
        />
      ));
    }
  }
  const fetchPersonaje = async () => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?${buildQuery()}`
      );
      if (response.status !== 200) {
        throw new Error("Hubo un error en la peticion");
      }
      const data = await response.json();
      setPersonajesFiltrados(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className=" bg-gray-900 flex justify-center p-6">
        <div className=" max-w-5xl bg-gray-800 rounded-2xl p-6 shadow-lg">
          <h1 className="text-2xl font-semibold text-white mb-6">
            Filtro Personajes
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-300">Nombre</label>
              <input
                type="text"
                placeholder="Nombre"
                value={personajes.nombre}
                onChange={(e) =>
                  setPersonajes({ ...personajes, nombre: e.target.value })
                }
                className="bg-gray-700 text-white rounded-lg px-3 py-2
                     focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-300">Género</label>
              <select
                value={personajes.genero}
                onChange={(e) =>
                  setPersonajes({ ...personajes, genero: e.target.value })
                }
                className="bg-gray-700 text-white rounded-lg px-3 py-2
                     focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <option value="">Todos</option>
                <option value="Male">Masculino</option>
                <option value="Female">Femenino</option>
                <option value="unknown">Desconocido</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-300">Estado</label>
              <select
                value={personajes.estado}
                onChange={(e) =>
                  setPersonajes({ ...personajes, estado: e.target.value })
                }
                className="bg-gray-700 text-white rounded-lg px-3 py-2
                     focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <option value="">Todos</option>
                <option value="alive">Vivo</option>
                <option value="dead">Muerto</option>
                <option value="unknown">Desconocido</option>
              </select>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={fetchPersonaje}
              className="bg-cyan-500 hover:bg-cyan-600
                   text-black font-semibold px-6 py-2
                   rounded-lg transition"
            >
              Buscar
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-6 p-6 bg-gray-900 min-h-screen">
        {personajesFiltrados.length > 0 ? (
          functionMap()
        ) : (
          <h1 className="text-white">No hay personajes</h1>
        )}
      </div>
    </>
  );
}
