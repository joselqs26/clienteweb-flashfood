import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContextGeneral } from '../../context/GeneralContext';

import './index.css';
import { SimpleInput } from '../SimpleInput';
import { SimpleButton } from '../SimpleButton';
import { enviarLogin } from '../../events/funcionesLogin';
import Titulo from '../Titulo';
import burger from './assets/burger.png'

const Login = (props) => {
    const { user } = useContext(ContextGeneral);
    const [loginInfo, setLoginInfo] = useState({ 'email': '', 'password': '' });
    
    const navigate = useNavigate();

    useEffect(() => {
        console.log( user )
        if( user?.idType === '1' ) navigate('/productos');
        if( user?.idType === '2' ) navigate('/pedidos');
    }, [user])

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