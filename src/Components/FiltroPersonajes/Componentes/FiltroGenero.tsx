import { useState } from "react";

export function FiltroGenero() {
  const [gender, setGender] = useState<string>("");
  return (
    <div>
      <label>Gender</label>
      Female
      <input
        className="ml-2"
        type="radio"
        name="gender"
        value="Female"
        onClick={() => setGender("Female")}
      />
      Male
      <input
        className="ml-2"
        type="radio"
        name="gender"
        value="Male"
        onClick={() => {
          setGender("Male");
          console.log("Male");
        }}
      />
      Genderless
      <input
        className="ml-2"
        type="radio"
        name="gender"
        value="Genderless"
        onClick={() => setGender("Genderless")}
      />
      Unknown
      <input
        className="ml-2"
        type="radio"
        name="gender"
        value="Unknown"
        onClick={() => setGender("Unknown")}
      />
      <p>{gender}</p>
    </div>
  );
}
