import './index.css';
import Login from '../Login';
import { ReceiverEvents } from '../../events/ReceiverEvents/ReceiverEvents';
import { ContextGeneralProvider } from '../../context/GeneralContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from '../Router/ProtectedRoute';
import Menu from '../Paginas/Menu/Menu';
import Productos from '../Paginas/productos/productos';

const App = () => {
  return (
    <div className="App-main">
      <ContextGeneralProvider>
        <ReceiverEvents />

        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/productos' element={<Productos />} />
          </Routes>
        </BrowserRouter>

      </ContextGeneralProvider>
    </div>
  )
}

export default App;