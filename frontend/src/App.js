import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Landing from "./pages/Landing";
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from "./pages/Portfolio";
import UIUXPortfolio from "./pages/UIUXPortfolio";

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    // Refresh AOS on route change
    AOS.refresh();
  }, [location]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/uiuxPortfolio" element={<UIUXPortfolio />} />
      </Routes>
    </div>
  );
}

export default function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
