/**
 * Ejemplo de uso de:
 * -useState() 
 * -useRef()  nos sirve para referenciar elementos dentro de la vista
 * -useEffect()
 */

import React, {useState,useRef,useEffect} from 'react'

    const Ejemplo2 = () => {
        //vamos a crear 2 contadores distintos 
        //cada uno en un estado diferente
        
        const [contador1, setcontador1] = useState(0)
        const [contador2, setcontador2] = useState(0)  

        //vamos a crear una referencia con useRef() Para asociar una variable
        // con un elemento del DOM del componente (vista HTML)

        const miRef = useRef();

        function incrementar1(){
            setcontador1(contador1 +1)
        }
        
        function incrementar2(){
            setcontador2(contador2 +1)
        }
        /**
         * trabajando con useEffect
         * 
         */
        /**
         * ?caso1: Ejecutar Siempre un snippet de codigo
         * cada vez que haya un cambio en el estado del componente
         * se ejecuta aquello que este dentro del useEffect()
         * 
         * 
         */


    // useEffect(()=>{
    //     console.log('Cambio en el estado del componente');
    //     console.log('Mostrando Referencia a elemento del DOM:')
    //     console.log(miRef)
    // })

          /**
         * ? Caso 2: ejecutar solo cuando cambie contador1
         * cada vez que haya un cambio en contador 1 , se ejecuto loq ue diga el useEffect()
         * en caso de que cambie contador2, no habra ejecucion
         */

        //   useEffect(() => {
        //         console.log('Cambio en estado del componente')
        //         console.log('Mostrando referencia a elemento del Dom')
        //         console.log(miRef)
        //   }, [contador1]);
          
        /**
         * ? caso 3: ejecutar solo cuando cambie contador1/contador2
         */

        useEffect(() => {
            console.log('Cambio en estado del componente')
            console.log('Mostrando referencia a elemento del Dom')
            console.log(miRef)
      }, [contador1,contador2]);

  return (
    <div>
        <h1>***Ejemplo de useState(), useRef() y useEffect()***</h1>
        <h2>CONTADOR 1: {contador1} </h2>
        <h2>CONTADOR 1: {contador2} </h2>
        {/* Elemento Referenciado */}

        <h4 ref={miRef}>
            Ejemplo de elemento referenciado
        </h4>
        {/* Botones para cambiar contadores */}
        <div>
            <button onClick={incrementar1} >Incrementar 1</button>
            <button onClick={incrementar2} >Incrementar 2</button>

        </div>

    </div>
  )
}
export default Ejemplo2