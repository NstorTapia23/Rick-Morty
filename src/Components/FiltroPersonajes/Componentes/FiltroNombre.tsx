import { useState } from "react";

export function FiltroNombre() {
  const [name, setName] = useState<string>("");

  return (
    <div>
      <label>Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
