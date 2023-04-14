import Botao from './components/Botao';
import { GlobalStyle } from './components/Global';

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <h1>AluraFlix</h1>
      <Botao cta='Novo video' />
    </div>
  );
}

export default App;
