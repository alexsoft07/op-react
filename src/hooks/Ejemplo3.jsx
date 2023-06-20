/**
 * Ejemplo Hooks:
 * - useState()
 * - useContext()
 */
import React, { useState, useContext } from 'react';

/**
 * 
 * @returns Componente 1
 * Dispone de un contexto que va a tenert un valor
 * que recibe desde el padre
 */

const miContexto = React.createContext(null)
const Componente1 = () => {

    // Inicialiozamos un cointexto vacio que va a rellenarse conlos
    // datos del contexto del padre
    const state = useContext(miContexto);

    return (
        <div>
            <h1>
                El token es: {state.token}
            </h1>
            {/** pintamos el componente 2 */}
            <Componente2/>
        </div>
    );
}

const Componente2 = () => {

    const state = useContext(miContexto);

    return (
        <div>
            <h2>Hola Mundo</h2>
                la sesión es: {state.sesion}
        </div>
    );
};

const MiComponenteConContexto = () => {

    const estadoInicial = {
        token: '1234557',
        sesion: 1
    }

    // Creamos el estado de este componente
    const [sessionData, setSessionData] = useState(estadoInicial);

    function actualizarSesion(){
        setSessionData(
            {
                token: 'JWT123456789',
                sesion: sessionData.sesion + 1
            }
        );
    }

    return (
        <miContexto.Provider value={sessionData}>
            {/* Todo lo que esta aqui dentro puede leer los datos de sessionData */}
            {/* Además, si se actualiz, los componantes de qui tambien lo actualizan */}
            <h1>**** Ejemplo de useState() y useContext() ****</h1>
            <Componente1></Componente1>
            <button onClick={actualizarSesion}>Actualizar Sesión</button>
        </miContexto.Provider>
    );
};



export default MiComponenteConContexto;

