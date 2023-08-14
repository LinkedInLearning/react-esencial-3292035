import React  from 'react';
import ProductoItem from './ProductoItem';

const Catalogo = () => {
    
    const productos = [
        { id: 1,  nombre: 'Camiseta' , precio:20.99 },
        { id: 2, nombre: 'Pantalón', precio: 35.50 },
        { id: 3, nombre: 'Zapatos', precio: 60.00 },
        { id: 4, nombre: 'Bolso', precio: 25.75 },
        { id: 5, nombre: 'Gorra', precio: 15.00 },
        { id: 6, nombre: 'Calcetines', precio: 5.00 },
    ]

    return (
        <>
            <h2>Catálogo de Productos</h2>

                {productos.length === 0 ?(
                    <p>No hay productos disponibles en el catálogo.</p>
                ) : (

                    <div className='productos'>
                        {productos.map(
                            (producto ) => (
                                <ProductoItem key={producto.id} producto={producto}/>
                            )
                        )}
                    </div>
                )}
        </>
    );
};

export default Catalogo;
