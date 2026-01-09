import type { PersonajePreview } from "./helpers/PersonajeType";

export function PersonajesCard({
  name,
  status,
  species,
  type,
  gender,
  image,
}: PersonajePreview) {
  return (
    <div className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden w-64">
      <img
        className="w-full h-40 object-cover"
        src={image}
        alt={name}
        loading="lazy"
      />
      <div className="p-4">
        <h2 className="text-white font-bold text-lg mb-2">{name}</h2>
        <p className="text-gray-300 text-sm mb-1">Estado: {status}</p>
        <p className="text-gray-300 text-sm mb-1">Especie: {species}</p>
        <p className="text-gray-300 text-sm mb-1">Tipo: {type || "N/A"}</p>
        <p className="text-gray-300 text-sm">
          Género: {gender || "Desconocido"}
        </p>
      </div>
    </div>
  );
}
