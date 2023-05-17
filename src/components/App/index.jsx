import { ReceiverEvents } from '../../events/ReceiverEvents/ReceiverEvents';
import { ContextGeneralProvider } from '../../context/GeneralContext';
import { ProductosProvider } from '../../context/ProductosContext';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from '../Router/ProtectedRoute';

import './index.css';
import Login from '../Login';
import Productos from '../Paginas/Productos/productos';
import Carrito from '../Paginas/Carrito/Carrito';

const App = () => (
  <div className="App-main">
    <ContextGeneralProvider>
      <ReceiverEvents />

      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/productos' element={
            <ProductosProvider>
            <Productos />
            </ProductosProvider>
          } />
          <Route path='/carrito' element={
            <ProductosProvider>
            <Carrito />
            </ProductosProvider>
          } />
        </Routes>
      </BrowserRouter>
    </ContextGeneralProvider>

  </div>
)

export default App;