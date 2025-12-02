import NavBar from "./componentes/navbar/Navbar";
import Footer from "./componentes/footer/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />

      <main className="flex-grow">
        <Home />
      </main>

      <Footer />
    </div>
  );
}

export default App;
