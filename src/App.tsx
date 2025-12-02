import NavBar from "./componentes/navbar/Navbar";
import Footer from "./componentes/footer/Footer";

import Home from "./pages/Home";
import Categorias from "./pages/Categorias";
import Produtos from "./pages/Produtos";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      <main className="flex-grow bg-slate-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/produtos" element={<Produtos />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
