import React, { useEffect, useState } from 'react';

const ClockEjersicio = (props) => {

    const [hora, setHora] = useState('');
    const [edad, setEdad] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date();
            const formattedHora = date.toLocaleTimeString();
            date.toLocaleTimeString();
            setHora(formattedHora);
            setEdad(edad => edad + 1 );
        }, 1000);
        return () => clearInterval(interval);
    }, []);


    

    return (
        <div>
            <h2>Hora Actual: { hora }</h2>
            <h3>Nombre: { props.name} { props.last }</h3>
            <h1>Edad: { edad }</h1>
        </div>
    );
}

export default ClockEjersicio;
