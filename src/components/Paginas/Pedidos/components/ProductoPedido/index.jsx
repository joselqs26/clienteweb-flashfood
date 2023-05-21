import React from 'react'
import './index.css'

const ProductoPedido = ({producto}) => {
  return (
    <div className="producto-pedido">
            <p className="produc-nombre">{producto.nombre}</p>

            <div className="contador">
                <span className="span-num">
                    {producto.cantidad}
                </span>
            </div>

        </div>
  )
}

export {ProductoPedido};