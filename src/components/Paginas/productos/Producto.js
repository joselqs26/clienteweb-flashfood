
import "./Producto.css"
import React, { useState } from 'react';

const Producto = ({producto} ) =>{

    const [count, setCount] = useState(0);

       
    return(
        <div className="container-producto">

            <p className="produc-nombre">
                 {producto.nombre}

            </p>

            <p className="produc-precio">
                ${producto.precio}

            </p>

            <p className="produc-descripcion">
                {producto.descripcion}

           </p>


            {/* <p className="produc-idproducto">
                 {producto.idProducto}
            </p> */}
            
           {/* {producto.nombreCategoria} */}


           <div className="contador">

                <button className="btn-mas" onClick={() => setCount(count + 1)}> 
                    +
                </button>

                <span className="span-num"> 
                    {count}
                </span>

                <button className="btn-menos" onClick={() => {

                    if(count>0){
                        setCount(count - 1)
                    }
                    
                } }>
                    -
                </button>

                

           </div>

        </div>
    )

    
}

export default Producto