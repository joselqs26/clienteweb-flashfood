import React from 'react'
import './index.css'

const ProductoFactura = ({producto}) => {
  return (
    <div className="producto-pedido">
            <p className="produc-nombre">{producto.nombre}</p>

            <div className="contador">
                <span className="span-num">
                    {producto.cantidad}
                </span>
            </div>
            <p className="produc-subtotal">Subtotal: $ {producto.subtotal}</p>
        </div>
  )
}

export default ProductoFactura ;