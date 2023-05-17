import React from 'react'
import './ButtonShopping.css'
import carrito from './assets/carrito-de-compras.svg'
import { Link } from 'react-router-dom'

const ButtonShopping = () => {
    return (
        <Link to="/carrito">
            <div className='btn_shopping'>
                <img src={carrito} alt="Logo Carrito" />
            </div>
        </Link>
    )
}

export default ButtonShopping