/**
    ejemplo de uso del Hook useState
    Crear un componente tipo funcion y acceder a su estado
    privado a traves de un hook y , ademas poder modificarlo
 */

    import React, {useState} from 'react'
    
    const Ejemplo1 = () => {
        //valor inicial para un contador
        const valorInicial = 0;

        //valor inicial para una persona

        const personaInicial = {
            nombre:"Alirio",
            email:"Alopez922@hotmail.com"
        }

        /*
        Queremos que el valorinicial y personainicial sean
        parte del estado del componente para asi poder gestionar su cambio y
        que este se vea reflejado en la vista del componente

        const [nombreVariable,funcionparacambiar]= useState(valorinicial)
        */
       const [contador,setContador]= useState(valorInicial)
       const [persona,setPersona] =useState(personaInicial)

       /**
        * funcion para actualizar el estado privado que contiene el contador
        */
        function incrementarContador(){
            //? funcionParaCambiar(nuevoValor)
            setContador(contador + 1)
        }
     /**
      * 
      *funcion para actualizar el estado de persona en el componente
      */
        function actualizarPersona(nombre){
            setPersona(
                {
                    nombre:"Jose",
                    email:"jose@hotmail.com"
                }
            )
        }

    
        
      return (
        <div>
                <h1>Ejemplo de UseState </h1>
                <h2>Contador: {contador} </h2>
                <h2>Datos de la Persona:</h2>
                <h3> Nombre: {persona.nombre} </h3>
                <h4> Email: {persona.email} </h4>
                {/* Bloque de botones para actualizar estado */}

                <button onClick={incrementarContador}>Incrementar Contador</button>
                <button onClick={actualizarPersona} >Actualizar Persona</button>
        </div>
      )
    }

    export default Ejemplo1;