import React from 'react'

function ItemCarrito({producto,onClick}) {
    return (
        <>
            <div className="card mt-3">
                <div className="card-body">
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text">${producto.precio}</p>
                    <button className="btn btn-danger" onClick={onClick}>Remover</button>
                </div>
            </div>
        </>
    )
}

export default ItemCarrito