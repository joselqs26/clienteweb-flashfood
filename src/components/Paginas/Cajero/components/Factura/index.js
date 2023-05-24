
import React from "react";
import { SimpleButton } from "../../../../SimpleButton";
import ProductoFactura from "../ProductoFactura";
import './index.css'
import { enviarPago } from "../../../../../events/funcionesPago";

const Factura = ({pedido, info}) => {
    const pagarPedido = () => {
        let clon = [...info.pedidos]
        let index = clon.indexOf( pedido );

        clon[index] = {...pedido, estado: 'Pagado'}

        console.log( pedido.idPedido )

        info.setPedidos(clon)

        enviarPago(pedido.idPedido);
    }

    return (
        <div className="pedido">
            <div className="pedido_header">
                <span className="mesa-label">Mesa {pedido.numeroMesa}</span>

            </div>
            <div className="pedido_list">
                {pedido.ordenes.map((obj) => (
                    <ProductoFactura key={obj.idProducto} producto={obj} />
                ))}
                <div className="pedido_btn_container">

                    <div className="container-total">
                        <label className="Label-total"> Total </label>
                        <label className="precio-total">${pedido.totalPedido}</label>
                        
                    </div>

                    <SimpleButton value={'Pagado'} onClick={pagarPedido} />
                </div>
            </div>
        </div>
    );
};

export default Factura;
