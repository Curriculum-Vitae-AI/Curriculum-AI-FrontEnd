import Navbar from './components/Navbar';
import Home from './pages/Home';
import Roadmap from './pages/Roadmap';
import CartaDeMotivacao from './pages/CartaDeMotivacao';
import Vagas from './pages/Vagas';
import './App.css';

function App() {
  return (
    <div>
      <Navbar/>
      <Vagas/>
    </div>
    
  );
}

export default App;