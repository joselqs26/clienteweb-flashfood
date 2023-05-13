import React, { useEffect, useState } from 'react'
import Menu from '../Menu/Menu';
import Categoria from './categorias';

const Productos = () => {
    const [productos, setProductos] = useState({});
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        fetch('https://consultas-flashfood.azurewebsites.net/productos')
            .then((response) => response.json())
            .then((data) => {
                console.log(JSON.stringify(data))
                const categoriasUnicas = [...new Set(data.map((producto) => producto.nombreCategoria))];
                setCategorias(categoriasUnicas);

                // Se crea un objeto donde cada llave es la categoría y el valor es un arreglo de productos de esa categoría.
                const productosPorCategoria = {};
                categoriasUnicas.forEach((categoria) => {
                    productosPorCategoria[categoria] = data.filter(
                        (producto) => producto.nombreCategoria === categoria
                    );
                });
                setProductos(productosPorCategoria);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    
    return (
        <div>
            <Menu categorias={categorias}/>
            {
                categorias.map(  cat => (<Categoria key={cat} productos={productos[cat]} categoria={cat} /> ))
            }
        </div>
    )
}

export default Productos