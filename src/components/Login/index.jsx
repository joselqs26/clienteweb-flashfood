import './index.css';
import { useState } from 'react';
import { SimpleInput } from '../SimpleInput';
import { SimpleButton } from '../SimpleButton';
import { enviarLogin } from '../../events/funcionesLogin';
import Label from "../Label";
import Titulo from '../Titulo';
import burger from './assets/burger.png'

const Login = (props) => {
    const [loginInfo, setLoginInfo] = useState({ 'email': '', 'password': '' });

    const setEmail = (event) => {
        setLoginInfo({ ...loginInfo, 'email': event.target.value })
    };

    const setPassword = (event) => {
        setLoginInfo({ ...loginInfo, 'password': event.target.value })
    };

    const clickLogin = () => {
        console.log(enviarLogin(loginInfo['email'], loginInfo['password']));
    }

    return (
    <div className="Login">
        <div className='logo-container'>
            <img src={burger} alt="Logo Empresa" />
        </div>

        <Titulo text="Flash Food" />
    
        <div className="form-login">

            <SimpleInput
                type='email'
                name='email'
                label='Correo'
                required={true}
                onChange={setEmail}
            />
            
            <SimpleInput
                type='password'
                name='password'
                label='Contraseña'
                required={true}
                onChange={setPassword}
            />

            <div className='boton-container'>
                <SimpleButton value='LOGIN' onClick={clickLogin} />
                <a className='text-contraseña' href="#">¿Has olvidado tu contraseña?</a>
            </div>
        </div>
    </div>);
}

export default Login;