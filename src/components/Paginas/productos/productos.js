import React, { useContext, useEffect, useState } from 'react'
import Menu from '../Menu/Menu';
import Categoria from './categorias';
import ButtonShopping from '../../ButtonShopping/ButtonShopping';
import { ProductosContext } from '../../../context/ProductosContext';

const Productos = () => {
    const { 
        productos, setProductos,
        categorias, setCategorias,
        pedido, setPedido
    } = useContext(ProductosContext);

    useEffect(() => {
        if( Object.keys(productos).length === 0 && categorias.length === 0 ) {
            fetch('https://api-consultas-flashfood.azurewebsites.net/productos')
            .then((response) => response.json())
            .then((data) => {
                console.log(JSON.stringify(data))
                const categoriasUnicas = [...new Set(data.map((producto) => producto.nombreCategoria.trim()))];
                setCategorias(categoriasUnicas);

                // Se crea un objeto donde cada llave es la categoría y el valor es un arreglo de productos de esa categoría.
                const productosPorCategoria = {};
                categoriasUnicas.forEach((categoria) => {
                    productosPorCategoria[categoria] = data.filter(
                        (producto) => producto.nombreCategoria.trim() === categoria
                    );
                });
                setProductos(productosPorCategoria);
            })
            .catch((err) => {
                console.log(err.message);
            });
        }
    });

    useEffect( () => {
        console.log( pedido )
    }, [pedido])

    
    return (
        <div>
            <Menu categorias={categorias}/>
            {
                categorias.map(  cat => (<Categoria key={cat} productos={productos[cat]} categoria={cat} /> ))
            }
            <ButtonShopping />
        </div>
    )
}

export default Productos