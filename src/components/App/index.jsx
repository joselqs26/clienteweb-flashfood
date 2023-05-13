import './index.css';
import Login from '../Login';
import { ReceiverEvents } from '../../events/ReceiverEvents/ReceiverEvents';
import { ContextGeneralProvider } from '../../context/GeneralContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from '../Router/ProtectedRoute';

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