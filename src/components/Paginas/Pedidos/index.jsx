import React, { useContext, useEffect, useState } from 'react'
import burger from './../../Login/assets/burger.png'
import './index.css';
import { Pedido } from './components/Pedido';
import { ContextGeneral } from '../../../context/GeneralContext';

const Pedidos = () => {
    const { flagPedido } = useContext( ContextGeneral );

    const [pedidos, setPedidos] = useState( [] );

    const fetchPedidos = () => {
        fetch('https://api-consultas-flashfood.azurewebsites.net/pedidos')
            .then((response) => response.json())
            .then((data) => {
                console.log(JSON.stringify(data))
                setPedidos(data)
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    useEffect(() => {
        fetchPedidos();
    }, []);

    useEffect(() => {
        fetchPedidos();
    }, [flagPedido]);

    return (
        <>
            <div className="container-header">
                <div className='nav-icon'>
                    <img src={burger} alt="Logo Empresa" className='nav-icon__img' />
                </div>

                <div className="nav-logo">FlashFood</div>
            </div>
            <div className='pedidos_container'>
                <header className='header_pedidos'>
                    <h2>Pedidos</h2>
                </header>
                <div className='pedidos_list'>
                    {
                        pedidos.map( (pedido) => {
                            if(pedido.estado === 'Pedido') {
                                return <Pedido key={pedido.idPedido} pedido={pedido} info={{pedidos, setPedidos}} />
                            }
                            return ''
                        })
                    }
                </div>
            </div>
        </>
    )
}

export { Pedidos }