/**
 * Ejemplo de uso de metodo componenteDidUpdate en componente de clase
 * y uso de hook en componente Funcional
 * 
 */

import React, { Component,useEffect } from 'react';

export class DidUpdate extends Component {
    componentDidUpdate(){
        console.log('Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado')
    }
    render() {
        return (
            <div>
                <h1>DidUpdated</h1>
            </div>
        );
    }
}

export const DidUpdate = () => {
    useEffect(() => {
        console.log('Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado')
    });
    
    return (
    <div>DidUpdate</div>
  )
}

 



