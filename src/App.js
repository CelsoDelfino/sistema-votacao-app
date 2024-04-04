import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Votacao from './pages/Votacao';
import Resultado from './pages/Resultado';
import Eleicao from './pages/Eleicao';
import Chapa from './pages/Chapa';
import Empregado from './pages/Empregado';
import AdicionarEmpregado from './pages/AdicionarEmpregado';
import AdicionarChapa from './pages/AdicionarChapa';
import AdicionarEleicao from './pages/AdicionarEleicao';

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Votação</Link>
        </li>
        <li>
          <Link to="/resultado">Resultado</Link>
        </li>
        <li>
          <Link to="/eleicao">Eleição</Link>
        </li>
        <li>
          <Link to="/chapa">Chapa</Link>
        </li>
        <li>
          <Link to="/empregado">Empregado</Link>
        </li>
        </ul>
        <Routes>
          <Route path="/" element={<Votacao></Votacao>}>
          </Route>
          <Route path="/resultado" element={<Resultado></Resultado>}>
          </Route>
          <Route path="/eleicao" element={<Eleicao></Eleicao>}>
          </Route>
          <Route path="/chapa" element={<Chapa></Chapa>}>
          </Route>
          <Route path="/empregado" element={<Empregado></Empregado>}> 
          </Route>
          <Route path="/AdicionarEmpregado" element={<AdicionarEmpregado></AdicionarEmpregado>}> 
          </Route>
          <Route path="/AdicionarChapa" element={<AdicionarChapa></AdicionarChapa>}> 
          </Route>
          <Route path="/AdicionarEleicao" element={<AdicionarEleicao></AdicionarEleicao>}> 
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
