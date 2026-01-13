import { useState } from "react";

export function FiltroEspecie() {
  const [species, setSpecies] = useState<string>("");
  return (
    <div>
      <label>Species</label>
      <input type="radio" value="Human" onClick={() => setSpecies("Human")} />
      <label>Human</label>
      <input type="radio" value="Alien" onClick={() => setSpecies("Alien")} />
      <label>Alien</label>
      <br />
      <input
        type="radio"
        value="Unknown"
        onClick={() => setSpecies("Unknown")}
      />
      <label>Unknown</label>
      <p>{species}</p>
    </div>
  );
}
