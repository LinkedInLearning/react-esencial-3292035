import React from 'react';

const ProductoItem = ({ producto }) => {
    return (
        <div className='card'>
            <div className='item'>
            <h2>{producto.nombre}</h2>
            <p>
                    <strong>Precio:</strong>${producto.precio}
            </p>
            <button>
                Comprar
            </button>
            </div>
        </div>
        
    );
};

export default ProductoItem;
