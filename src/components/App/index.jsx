import './index.css';
import Login from '../Login';
import { ReceiverEvents } from '../../events/ReceiverEvents/ReceiverEvents';
import { ContextGeneralProvider } from '../../context/GeneralContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from '../Router/ProtectedRoute';

const App = () => {
  return (
    <div className="App-main">
      <ContextGeneralProvider>
        <ReceiverEvents />

        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login />} />
          </Routes>
        </BrowserRouter>

      </ContextGeneralProvider>
    </div>
  )
}

export default App;