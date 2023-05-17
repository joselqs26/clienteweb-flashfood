import {createContext, useState} from 'react';

const ProductosContext = createContext ();

const ProductosProvider = ({children}) => {
    const [categorias, setCategorias] = useState([]);
    const [productos, setProductos] = useState({});
    const [pedido, setPedido] = useState({});

    const contextValue = {
        categorias, setCategorias,
        productos, setProductos,
        pedido, setPedido,
    };

    return (
        <ProductosContext.Provider value={contextValue}>
            {children}
        </ProductosContext.Provider>
    )
}
const ProductosContextConsumer = ProductosContext.Consumer

export { ProductosProvider, ProductosContext };