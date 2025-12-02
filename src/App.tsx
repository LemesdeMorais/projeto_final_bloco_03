import { Routes, Route } from "react-router-dom";
import NavBar from "./componentes/navbar/Navbar";
import Footer from "./componentes/footer/Footer";
import Home from "./pages/Home";
import ListaCategorias from "./componentes/categorias/ListaCategorias";
import FormCategoria from "./componentes/categorias/FormCategoria";
import DeleteCategoria from "./componentes/categorias/DeleteCategoria";

import { ToastContainer } from "react-toastify";
import FormProduto from "./componentes/produtos/FormProdutos";
import DeleteProduto from "./componentes/produtos/DeleteProduto";
import ListaProdutos from "./componentes/produtos/ListaProdutos";
import Produtos from "./pages/Produtos";


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <ToastContainer />

      <main className="flex-grow bg-slate-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/categorias" element={<ListaCategorias />} />
          <Route path="/categorias/nova" element={<FormCategoria />} />
          <Route path="/categorias/editar/:id" element={<FormCategoria />} />
          <Route path="/categorias/deletar/:id" element={<DeleteCategoria />} />

          <Route path="/produtos" element={<Produtos />} />
          <Route path="/produtos/novo" element={<FormProduto />} />
          <Route path="/produtos/editar/:id" element={<FormProduto />} />
          <Route path="/produtos/deletar/:id" element={<DeleteProduto />} />


        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
