import './index.css';
import Login from '../Login';

import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Menu from '../Paginas/Menu/Menu';
import Producto from '../Paginas/productos/productos';



const App = () => (
  <div className="App-main">
    <BrowserRouter>
      <Routes>
        <Route path='/login'element={<Login/>} ></Route>
        <Route path='/menu'element={<Menu/>} ></Route>
        <Route path='/producto'element={<Producto/>} ></Route>
       
      </Routes>

    </BrowserRouter>
    
  </div>
) 

export default App;