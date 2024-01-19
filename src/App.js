import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Navbar/Home';
import Product from './Component/Navbar/Product';

function App() {
  return (
    <div className="App">


      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='product' element={<Product />}></Route>
      </Routes>
    </div>
  );
}

export default App;
