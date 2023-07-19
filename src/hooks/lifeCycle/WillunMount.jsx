/**
 * Ejemplo de uso del método componentWillUnmount para coponente clase
 * Ejemplo de uso de hooks para componente funcional
 * (Cuando el componente va a desaparecer)
 */

import React, { Component, useEffect } from 'react'

export class WillunMount extends Component {

    componentWillUnmount() {
        console.log('Comportamiento antes de que el componente desaparezca')
    }
    render() {
        return (
        <div>
            <h1>WillUnmounrt</h1>
        </div>
        )
    }
}


export const WillunMountHook = () => {

    useEffect(() => {
        // Aqui nop ponemos nada
        return () => {
            console.log('Comportamiento antes de que el componente desaparezca')
        };
    }, []);

    return (
        <div>
            <h1>WillUnmounrt</h1>
        </div>
    );
}

