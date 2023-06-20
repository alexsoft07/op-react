/**
 * Ejemplo para el uso de props.children
 */

import React from 'react';

const Ejemplo4 = (props) => {
    return (
        <div>
            <h1>**** Ejemplo de CHILDREN PROPS ****</h1>
            <h2>
                Nombre: { props.name }
            </h2>
            {/* porps.children pintará por defecto
            aquello que se encuentre entre las esquinas de apertura y cierre
            de edter componente desde el componente de orden superior 
            */}
            {props.children}
        </div>
    );
}

export default Ejemplo4;