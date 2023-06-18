/**
 * Ejemplo de uso de:
 * - useStateç
 * -  useRef
 * - useEffect
 */

import React, { useState, useRef, useEffect } from 'react';

const Ejemplo2 = () => {

    // Vamos a crear dos contadores distintos
    // cada uno en un estado diferente

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    // Vamos a crear una referencia con useRef() para asociar una variable
    // con un elemento del DOM del componente (vista HTML)

    const miRef = useRef();

    function incrementar1(){
        setContador1(contador1 + 1);
    }

    function incrementar2(){
        setContador2(contador2 + 1);
    }

/**
 * Trbajando con useEffect
 */

/**
 * ? Caso 1: Ejecutar SIEMPRE un snippet de codigo
 * Cada vez que haya un cambio en el estado del componrte
 * se ejecuta aquello que esté dentro del useEffect()
 */
    useEffect(()=> {
        console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
        console.log('Mostrando referencia a elemento del DOM:');
        console.log(miRef);
    })


    return (
        <div>
            <h1>*** Ejemplo de useState(), useRef(), useEffect() ***</h1>
            <h2>CONTADOR1 : { contador1 }</h2>
            <h2>CONTADOR2 : { contador2 }</h2>
            {/** Elemento Referenciado */}
            <h4 ref={miRef}>
                Ejemplo de elemento Referenciado
            </h4>
            {/**Botones para cambiar los contadores */}
            <button onClick={incrementar1}>Incrementar Contador1</button>
            <button onClick={incrementar2}>Incrementar Contador2</button>    
        </div>
    );
}

export default Ejemplo2;
