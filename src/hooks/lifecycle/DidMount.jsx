/**
 * Ejemplo de uso del metodo de ciclo de vida en componente
 * clase y el hook de ciclo de vida en componente funcional
 */

import React, {useEffect} from "react";

export class DidMount extends Component {
    componentDidMount(){
        console.log('Comportamiento antes de que el componente sea añadido al Dom')
    }

    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
}

export const DidmountHook =()=>{
    useEffect(()=>{
        console.log('Comportamiento antes de que el componente sea añadido al Dom')

    },[])
    return(
        <div>

        </div>
    )
}
