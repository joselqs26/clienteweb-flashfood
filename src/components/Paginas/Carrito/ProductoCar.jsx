import React, { useContext, useState } from 'react';
import { ProductosContext } from "../../../context/ProductosContext";
import "./ProductoCar.css"


const ProductoCar = ({ producto_car }) => {
    const {
        pedido, setPedido
    } = useContext(ProductosContext);

    console.log( producto_car );

    const producto = producto_car.product;

    const [count, setCount] = useState(producto_car.cantidad || 0);

    function onClickMas() {
        const newPedido = {...pedido};
        const count_up = (count + 1);
        const id = producto_car['id'];

        newPedido[ id ] = count_up;

        setPedido( newPedido );
        setCount(count + 1);
    }

    function onClickMenos() {
        if (count > 0) {
            if( count != 1 ) {
                const newPedido = {...pedido};
                const count_down = (count - 1);
                const id = producto_car['id'];

                newPedido[ id ] = count_down;

                setPedido( newPedido );
            } else {
                const oldPedido = {...pedido};
                const newPedido = {};
                const id = producto_car['id'];

                Object.keys( oldPedido ).forEach( key => {
                    if( key != id ) { newPedido[ key ] = oldPedido[ key ]};
                });

                setPedido( newPedido );
            }
            
            setCount(count - 1);
        }
    }

    return (
        <div className="producto-car">

            <p className="produc-nombre">{producto.nombre}</p>

            <p className="produc-subtotal">Subtotal: ${producto.precio * count}</p>

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

export default ProductoCar