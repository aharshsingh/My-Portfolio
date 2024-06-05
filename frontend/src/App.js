import Landing from "./pages/Landing";
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from "./pages/Portfolio";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Landing}></Route>
          <Route path="/Portfolio" Component={Portfolio}></Route>
          <Route path="/About" Component={About}></Route>
          <Route path="/Contact" Component={Contact}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
