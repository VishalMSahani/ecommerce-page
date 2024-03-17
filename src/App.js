
import './App.css';
import Navbar from './Components/Navbar';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <div className='bg-slate-200 shadow-sm border-b-2' >
        <Navbar/>
      </div>
     
     <Routes>
     <Route path="/" element={<Home />} /> 
     <Route path="/Cart" element={<Cart />} /> 
      
      </Routes> 
    </div>
  )
}

export default App;
