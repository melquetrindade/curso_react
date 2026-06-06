import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/home"
import Empresa from "./pages/empresa"
import Contato from "./pages/contato"
import NavBar from "./components/layout/navBar"
import Footer from "./components/layout/footer"

function App() {

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
