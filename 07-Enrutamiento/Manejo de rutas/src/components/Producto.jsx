import React from 'react'
import { useParams } from 'react-router-dom'
import Contents from './Contents';


function Producto() {

    const params = useParams();

    return (
        <>
            <h1> { params.nombreParam } </h1>
            <Contents />
        </>
    )
}

export default Producto