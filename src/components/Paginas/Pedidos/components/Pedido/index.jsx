import React, { useState, useEffect } from 'react';
import { ProductoPedido } from '../ProductoPedido';
import './index.css';
import { SimpleButton } from '../../../../SimpleButton';
import { enviarNuevaPreparacion } from '../../../../../events/funcionesPreparacion';

const Pedido = ({ pedido, info }) => {
    const [minutosTranscurridos, setMinutosTranscurridos] = useState(0);

    const calcularMinutosTranscurridos = () => {
        const fechaActualUTC = new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60000);
        const minutos = Math.round((fechaActualUTC - new Date(pedido.tiempoPedido)) / 60000);
        setMinutosTranscurridos(minutos);

        setTimeout(calcularMinutosTranscurridos, 60000);
    };

    useEffect(() => {
        calcularMinutosTranscurridos()

        const timeout = setTimeout(calcularMinutosTranscurridos, 60000);

        return () => clearTimeout(timeout);
    }, [pedido.tiempoPedido]);

    const completePedido = () => {
        let clon = [...info.pedidos]
        let index = clon.indexOf( pedido );

        clon[index] = {...pedido, estado: 'Completado'}

        console.log( pedido.idPedido )

        info.setPedidos(clon)

        enviarNuevaPreparacion(pedido.idPedido);
    }

    return (
        <div className="pedido">
            <div className="pedido_header">
                <span className="mesa-label">Mesa {pedido.numeroMesa}</span>
                <span className="tiempo-label">{minutosTranscurridos} Min</span>
            </div>
            <div className="pedido_list">
                {pedido.ordenes.map((obj) => (
                    <ProductoPedido key={obj.idProducto} producto={obj} />
                ))}
                <div className="pedido_btn_container">
                    <SimpleButton value={'Completar'} onClick={completePedido} />
                </div>
            </div>
        </div>
    );
};

export { Pedido };
