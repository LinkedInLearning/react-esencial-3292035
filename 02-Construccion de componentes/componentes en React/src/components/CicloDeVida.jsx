import React, { useState, useEffect } from 'react';

const CicloDeVida = () => {
    const [mensaje, setMensaje] = useState('...');

    useEffect(() => {
        console.log('El componente está cargado');
        setMensaje('El componente está cargado');

        return () => {
            console.log('El componente está descargado');
        };
    }, []);

    return (
        <div>
            <h1>Ciclo de vida de un componente</h1>
            <p>{mensaje}</p>
        </div>
    );
};

export default CicloDeVida;