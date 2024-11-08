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
        <Route path="/" element={<Home />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/motivacao" element={<CartaDeMotivacao />} />
        <Route path="/vagas" element={<Vagas />} />
        <Route path="/sobre" element={<SobreNos />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;