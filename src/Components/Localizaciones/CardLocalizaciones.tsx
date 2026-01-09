import type { LocalizacionPreview } from "./helpers/LocalizacionesType";

export function CardLocalizaciones({
  name,
  type,
  dimension,
}: LocalizacionPreview) {
  return (
    <div className="flex items-center bg-gray-800 text-white rounded-xl shadow-md overflow-hidden w-full max-w-md p-4 gap-4">
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-gray-400">Tipo: {type}</p>
        <p className="text-gray-400">Dimensión: {dimension}</p>
      </div>
    </div>
  );
}
