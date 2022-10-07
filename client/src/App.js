import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './views/Main'
import SingleProduct from './Components/SingleProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/" default />
          <Route element={<SingleProduct/>} path="/product/:id"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

