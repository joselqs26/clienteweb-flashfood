import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { ProductosContext } from '../../../context/ProductosContext';

import './Carrito.css'
import Menu from '../Menu/Menu';
import flecha_derecha from './assets/abajo-a-la-derecha.svg'
import ProductoCar from './ProductoCar';
import SimpleCombobox from '../../SimpleCombobox';
import { SecondaryButton } from '../../SecondaryButton';
import { ContextGeneral } from '../../../context/GeneralContext';
import { enviarNuevoPedido } from '../../../events/funcionesPedidos';

const Carrito = () => {
    const { 
        productos,
        categorias,
        pedido,
        mesa, setMesa
    } = useContext(ProductosContext);
    const { user } = useContext(ContextGeneral);
    const [mesas, setMesas] = useState([]);

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

    const enviarPedido = () => {
        console.log( arrProduct )

        if( user.idUser && mesa && arrProduct.length > 0 ) {
            const pedidoArr = arrProduct.map( ({id, cantidad}) => ({idProducto: id, cantidad}) );

            const pedidoObj = { 
                idMesero : user.idUser,
                idMesa : mesa,
                pedido: pedidoArr 
            };

            enviarNuevoPedido( pedidoObj );
        }
    }

    useEffect(() => {
        fetch('https://api-consultas-flashfood.azurewebsites.net/mesas')
            .then((response) => response.json())
            .then((data) => {
                console.log(JSON.stringify(data))
                const mesasDesocupadas = [...data.filter((mesa) => mesa.estado.trim() === 'Desocupado')];
                setMesas(mesasDesocupadas);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

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
                        <span className='description-label total-label'>Total:</span>
                        <span className='total-text'>${total}</span>

                        <span className='description-label mesa-label'>Mesa:</span>
                        <SimpleCombobox 
                            onChange={ setMesa }
                            options={
                                mesas.map( mesa => ({label: mesa.numeroMesa, value: mesa.idMesa}) )
                            }
                        />

                        <span></span>
                        
                        <SecondaryButton value='Aceptar' onClick={
                            enviarPedido
                        } />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Carrito