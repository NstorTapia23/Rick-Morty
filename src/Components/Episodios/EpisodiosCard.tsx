import type { Episodio } from "./Helpers/Episodios";

export function EpisodiosCard({ name, episode, air_date }: Episodio) {
  return (
    <div className="flex items-center bg-gray-800 text-white rounded-xl shadow-md overflow-hidden w-full max-w-md p-4 gap-4">
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold">Nombre: {name}</h2>
        <p className="text-gray-400">Fecha de estreno: {air_date}</p>
        <p className="text-gray-400">Episodio: {episode}</p>
      </div>
    </div>
  );
}
