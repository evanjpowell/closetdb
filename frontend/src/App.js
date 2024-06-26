import './styles.css';
import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import Clothes from './pages/Clothes';
import Add from './pages/Add';
import Update from './pages/Update';

function App() {
  return (
    <div className="App">
      <p>Test</p>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Clothes/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path="/update/:id" element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
