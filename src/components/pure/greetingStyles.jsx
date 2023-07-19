import React, { useState } from 'react'

// Definiendo estilos constantes

// ? Estilos para usuario logueado
const loggedStyle = {
    color: 'blue'
};

// ? Estilos para usuario no logueado
const unloggedStyle =  {
    color: 'tomato',
    fontWeight: 'bold'
};


const GreetingStyles = (props) => {

    // Generamos un estado para el componente
    // y controlar di el usuario esta logueado
    const [logged, setLogged] = useState(false);

    return (
        <div style={ logged ? loggedStyle : unloggedStyle }>

            { logged ?
                (<p>Hola, { props.name }</p>)
                :
                (<p>Please Login</p>)
            }
            
            <button onClick={() => {
                console.log('Boton pulsado');
                setLogged(!logged);
            }}>
                { logged ? 'Logout' : 'Loguin' }
            </button>
        </div>
    );
}

export default GreetingStyles;

