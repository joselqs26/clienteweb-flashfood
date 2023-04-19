import './App.css';
import { useState } from 'react';
import { SimpleInput } from './components/js/simpleInput';
import { SimpleButton } from './components/js/simpleButton';
import { enviarLogin } from './events/enviarLogin';

function App() {
  const [loginInfo, setLoginInfo] = useState( {'email' : '', 'password':'' } );

  const setEmail = (event) => {
    setLoginInfo( {...loginInfo, 'email': event.target.value } )
  };

  const setPassword = (event) => {
    setLoginInfo( {...loginInfo, 'password': event.target.value } )
  };

  const clickLogin = () => {
    console.log( enviarLogin(loginInfo['email'], loginInfo['password']) );
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="form-login">
          <SimpleInput 
            type='email'
            name='email'
            label='Correo'
            required={true}
            onChange={ setEmail }
          />
          
          <SimpleInput
            type='password'
            name='password'
            label='Contraseña'
            required={true}
            onChange={ setPassword }
          />

          <SimpleButton value='LOGIN' onClick={ clickLogin } />
        </div>
      </header>
    </div>
  );
}

export default App;
