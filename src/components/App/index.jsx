import { ReceiverEvents } from '../../events/ReceiverEvents/ReceiverEvents';
import { ContextGeneralProvider } from '../../context/GeneralContext';
import { ProductosProvider } from '../../context/ProductosContext';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from '../Router/ProtectedRoute';

import './index.css';
import Login from '../Login';
import Productos from '../Paginas/Productos/productos';
import Carrito from '../Paginas/Carrito/Carrito';
import { Pedidos } from '../Paginas/Pedidos';
import Cajero from '../Paginas/Cajero/Index';

const App = () => (
  <div className="App-main">
    <ContextGeneralProvider>
      <ReceiverEvents />

      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/productos' element={
            <ProtectedRoute idType='1'>
              <ProductosProvider>
                <Productos />
              </ProductosProvider>
            </ProtectedRoute>
          } />
          <Route path='/carrito' element={
            <ProtectedRoute idType='1'>
              <ProductosProvider>
                <Carrito />
              </ProductosProvider>
            </ProtectedRoute>
          } />
          <Route path='/pedidos' element={
            <ProtectedRoute idType='2'>
              <ProductosProvider>
                <Pedidos />
              </ProductosProvider>
            </ProtectedRoute>
          } />

          <Route path='/cajero' element={
            <ProtectedRoute idType='3'>
              <ProductosProvider>
                <Cajero/>
              </ProductosProvider>
            </ProtectedRoute>
           } />
        </Routes>
      </BrowserRouter>
    </ContextGeneralProvider>

  </div>
)

export default App;