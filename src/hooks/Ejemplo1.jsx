/** 
 * Ejemplo de uso del Hook useState
 * 
 * Crear un comnponente de tipo función y acceder a su estado
 * privado a travéz de un hook y además poder modificarlo
 */

import React, { useState } from 'react'

const Ejemplo1 = () =>  {

    // Valor inicial para un condutor
    const valorInicial = 0;

    // Valor inicial para una persona
    const personaInicial = {
        nombre : 'Alexander',
        email : 'alexanderhtorres@hotmail.com'
    }

    /**
     * Queremos que el VALOPRINICIAL y PERSONAINICIAL sean
     * parte del estado del componente para así gestionar su cambio
     * y que éste se ve reflejado en la vista del componente
     * 
     * const [nombreVariable, funcionParaCambiar] = useState(valorInicial)
     */

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    /**
     * Función para actualizar el estado privado que contiene el contador
     */
    function incrementarContador(){
        // ? funcionParaCambiar(nuevoValor)
        setContador(contador + 1);
    }

    /** Función para actualizar el estado de persona en el componente */

    function actualizarPersona() {
        setPersona(
            {
                nombre : 'pepito',
                email : 'pperez@ejemplo.com'
            }
        )
    }

    return (
        <div>
            <h1>*** Ejemplo de useState() ***</h1>
            <h2>CONTADOR : { contador }</h2>
            <h2>DATOS DE LA PERSONA:</h2>
            <h2>NOMBRE : { persona.nombre }</h2>
            <h2>EMAIL : { persona.email }</h2>
            {/** B>loque de botones para el estado del componente */}
            <button onClick={incrementarContador}>Incrementar Contador</button>
            <button onClick={actualizarPersona}> Actualizar Persona</button>
        </div>
    )
}

export default Ejemplo1;
