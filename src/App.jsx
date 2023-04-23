import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './components/Global';
import { VideosProvider } from './context/VideosProvider';
import Header from './components/Header';
import Home from './pages/Home';

function App() {

  return (
    <VideosProvider>
      <GlobalStyle />
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </VideosProvider>
  );
}

export default App;
