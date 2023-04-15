import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { simpleInput } from './components/js/simpleInput';
import { simpleButton } from './components/js/simpleButton';

function App() {
  const [loginInfo, setLoginInfo] = useState( {'email' : '', 'password':'' } );

  const setEmail = (value) => {
    setLoginInfo( {...loginInfo, 'email': value } )
  };

  const setPassword = (value) => {
    setLoginInfo( {...loginInfo, 'password': value } )
  };

  const enviarLogin = (loginInfo) => {

  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="form-login">
          <simpleInput 
            type='email'
            name='email'
            label='Correo'
            required={true}
            onChange={ setEmail }
          />
          
          <simpleInput
            type='password'
            name='password'
            label='Contraseña'
            required={true}
            onChange={ setPassword }
          />

          <simpleButton value='LOGIN' onClick={ enviarLogin } />
        </div>
      </header>
    </div>
  );
}

export default App;
