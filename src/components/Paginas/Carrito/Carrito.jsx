import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { ProductosContext } from '../../../context/ProductosContext';

import './Carrito.css'
import Menu from '../Menu/Menu';
import flecha_derecha from './assets/abajo-a-la-derecha.svg'
import ProductoCar from './ProductoCar';

const Carrito = () => {
    const { 
        productos, setProductos,
        categorias, setCategorias,
        pedido, setPedido
    } = useContext(ProductosContext);

    const arrProduct = Object.keys( pedido ).map( key_i => {
        let product = {}

        Object.keys( productos ).forEach( key_j => {
            productos[ key_j ].forEach( obj => {
                if( obj.idProducto.toString() === key_i ) {
                    product = obj
                };
            })
        })

        return { id : key_i, product, cantidad : pedido[ key_i ] };
    })

    const total = arrProduct.reduce((accumulator, current) => {
        const precioTotal = current.product.precio * current.cantidad;
        return accumulator + precioTotal;
    }, 0);

    console.log( total );

    return (
        <>
            <Menu categorias={categorias} />
            <div className='carrito_container'>
                <header className='header_carrito'>
                    <h2>Carrito de compras</h2>
                    <Link className='link_regresar' to="/productos">
                        <div className='btn_regresar'>
                            <img src={flecha_derecha} alt="Logo Flecha" />
                        </div>
                    </Link>
                </header>

                <div className='carrito'>
                    <div className='carrito_list'>
                        {                               
                            arrProduct.map( obj => <ProductoCar key={obj.id} producto_car={obj} />)
                        }
                    </div>
                    <div className='carrito_description'>
                        <span className='total-label'>Total:</span>
                        <span className='total-text'>${total}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Carrito