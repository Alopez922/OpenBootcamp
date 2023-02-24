import React, {useState} from 'react'
import PropTypes from 'prop-types'

const Fgreeting =(props) => {
//usar el hook useState
// const [variable, metodo para actualizar] = useState(valor Inicial)
   
const [age, setAge] = useState(29) // esto es un Hook
const birthday=()=>{
    //Actualizar el state 
    setAge(age + 1)
}

  return (
    <div>
    <h1>!HOLA {props.name}  desde componente Funcional</h1>       
    <h2>
          Tu edad es de: {age}
      </h2> 
    
          <div>
            <button onClick={birthday}>Cumplir Años</button>
          </div>
    
     </div> 


    )
}

Fgreeting.propTypes = {
    name: PropTypes.string,
}

export default Fgreeting