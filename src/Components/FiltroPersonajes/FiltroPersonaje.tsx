import { FiltroGenero } from "./Componentes/FiltroGenero";
import { FiltroEspecie } from "./Componentes/FiltroEspecie";

export function FiltroPersonaje() {
  return (
    <>
      <div>
        <FiltroGenero />
        <FiltroEspecie />
      </div>
    </>
  );
}
