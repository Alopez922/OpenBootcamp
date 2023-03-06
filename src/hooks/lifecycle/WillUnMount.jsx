/**
 * Ejemplo de uso del metodo Component willUnMount para componente clase 
 * Ejemplo de uso del hook para componente funcional
 * (cuando el componente va a desaparecer)
*/

import React, { Component } from 'react'

export  class WillUnMount extends Component {
    componentWillUnmount(){
        console.log('Comportamiento antes de que el componente desaparezca')
    }
  render() {
    return (
      <div>
        <h1>
            WillUnMount
        </h1>
      </div>
    )
  }
}

const WillUnMountHook=()=>{
    useEffect(() => {
        return()=>{
            console.log('Comportamiento antes de que el componente Desaparezca');
        }
    
    
    }, []);
    
    return(
        <div>

        </div>
    )
}





