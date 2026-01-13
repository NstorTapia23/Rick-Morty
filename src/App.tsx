import { Header } from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./Components/Footer";
import { Localizaciones } from "./Components/Localizaciones/Localizaciones";
import { Personajes } from "./Components/Personajes/Personajes";
import { Inicio } from "./Components/Inicio/Inicio";
import { Episodios } from "./Components/Episodios/Episodios";
import { FiltroPersonaje } from "./Components/FiltroPersonajes/FiltroPersonaje";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <div className="flex-1">
          <Header />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route
              path="/personajes"
              element={
                <div>
                  <Personajes />
                </div>
              }
            />
            <Route
              path="/localizaciones"
              element={
                <div>
                  <Localizaciones />
                </div>
              }
            />
            <Route
              path="/episodios"
              element={
                <div>
                  <Episodios />
                </div>
              }
            />
            <Route path="/filtro-personajes" element={<FiltroPersonaje />} />
          </Routes>
        </div>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
