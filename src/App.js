import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Roadmap from './pages/Roadmap';
import CartaDeMotivacao from './pages/CartaDeMotivacao';
import Vagas from './pages/Vagas';
import SobreNos from './pages/SobreNos';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/Curriculum-AI-FrontEnd" element={<Home />} />
        <Route path="/Roadmap" element={<Roadmap />} />
        <Route path="/CartaDeMotivacao" element={<CartaDeMotivacao />} />
        <Route path="/Vagas" element={<Vagas />} />
        <Route path="/SobreNos" element={<SobreNos />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;