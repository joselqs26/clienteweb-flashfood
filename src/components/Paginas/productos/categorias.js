
import React from "react";
import Producto from "./Producto";
import "./categorias.css"; 

const Categoria = ( { categoria, productos } ) => {
    return(
        <div className="categoria" id={categoria} >

         <h2>
            {categoria}
         </h2>
        {productos.map(  prot => (<Producto key={prot.idProducto} producto={prot} /> ))}

      

        </div>
    )

}

export default Categoria