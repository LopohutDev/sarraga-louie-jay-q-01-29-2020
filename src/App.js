import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <hr className="break" />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
