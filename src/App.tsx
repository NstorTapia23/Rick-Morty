import { Header } from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./Components/Footer";
import { Localizaciones } from "./Components/Localizaciones/Localizaciones";
import { Personajes } from "./Components/Personajes/Personajes";
import { Inicio } from "./Components/Inicio/Inicio";
import { Episodios } from "./Components/Episodios/Episodios";
import { Filtro } from "./Components/Filtro/Filtro";

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
            <Route path="/filtro" element={<Filtro />}></Route>
          </Routes>
        </div>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
