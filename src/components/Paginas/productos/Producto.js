
import React, { useContext, useState } from 'react';
import "./Producto.css"
import { ProductosContext } from "../../../context/ProductosContext";

const Producto = ({ producto }) => {
    const {
        pedido, setPedido
    } = useContext(ProductosContext);

    const [count, setCount] = useState(pedido[`${producto.idProducto}`] || 0);

    function onClickMas() {
        const newPedido = {...pedido};
        const count_up = (count + 1);
        const id = producto.idProducto;

        newPedido[ id ] = count_up;

        setPedido( newPedido );
        setCount(count + 1);
    }

    function onClickMenos() {
        if (count > 0) {
            if( count != 1 ) {
                const newPedido = {...pedido};
                const count_down = (count - 1);
                const id = producto.idProducto;

                newPedido[ id ] = count_down;

                setPedido( newPedido );
            } else {
                const oldPedido = {...pedido};
                const newPedido = {};
                const id = producto.idProducto;

                Object.keys( oldPedido ).forEach( key => {
                    if( key != id ) { newPedido[ key ] = oldPedido[ key ]};
                });

                setPedido( newPedido );
            }
            
            setCount(count - 1);
        }
    }

    return (
        <div className="container-producto">

            <p className="produc-nombre">{producto.nombre}</p>

            <p className="produc-precio">${producto.precio}</p>

            <p className="produc-descripcion"> {producto.descripcion} </p>

            <div className="contador">

                <button className="btn-mas" onClick={() => onClickMas()}>
                    +
                </button>

                <span className="span-num">
                    {count}
                </span>

                <button className="btn-menos" onClick={() => onClickMenos()}>
                    -
                </button>
            </div>

        </div>
    )


}

export default Producto