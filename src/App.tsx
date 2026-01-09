import { Header } from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./Components/Footer";
import { Localizaciones } from "./Components/Localizaciones/Localizaciones";
import { Personajes } from "./Components/Personajes/Personajes";
import { Inicio } from "./Components/Inicio/Inicio";

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
            <Route path="/localizaciones" element={<Localizaciones />} />
          </Routes>
        </div>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
