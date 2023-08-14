import React, { useContext } from 'react'
import ItemCarrito from './ItemCarrito';
import { DataContext } from './DataContext';
 

function ListaCarrito() {

  const { data, setData } = useContext(DataContext);

  const removerItem = (event)=>{
    const id = event.id;
      setData(prevData => prevData.map(item =>
          item.id === id ? { ...item, status: 'un-selected' } : item
      ));
  }

  const filteredItems = data.filter( item => item.status === 'selected' );

  return (
    <div className="col-md-3 border-start border-4 border-secondary">
      <div className="sticky-top " >
        <h2>Shopping Cart</h2>
        {filteredItems.map(producto => (
          <ItemCarrito key={producto.id} producto={producto} 
            onClick={ ()=>{ removerItem(producto) } }
          />
        ))}
      </div>
    </div>

  )
}

export default ListaCarrito