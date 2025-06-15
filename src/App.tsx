import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/react-start/Home';
import About from './pages/react-start/About';
import Navigation from './pages/Navigation';
import NotFound from './pages/react-start/NotFound';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="react-start/" element={<Home />} />
          <Route path="react-start/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;