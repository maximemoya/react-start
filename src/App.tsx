import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/react-start/Home';
import About from './pages/react-start/About';
import NotFound from './pages/react-start/NotFound';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="react-start/" element={<Home />} />
          <Route path="react-start/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <Navigation /> */}
      </div>
    </Router>
  );
};

export default App;