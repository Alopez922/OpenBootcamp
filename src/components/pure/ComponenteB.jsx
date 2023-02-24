import React from 'react'
import PropTypes from "prop-types";
import {Contacto} from "../../models/contacto.class"

const ComponenteB = ({contacto}) => {
  return (
    <div>
        <h2>
            Nombre: { contacto.Nombre }
        </h2>

        <h3>
            Apellido: { contacto.Apellido }
        </h3>

        <h4>
            Email:{ contacto.Email }
        </h4>

        <h4>
            Conectado:{contacto.Conectado? 'Contacto En Linea':'Contacto No Disponible' }
        </h4>

    </div>
  )

}

ComponenteB.propTypes={
    contacto: PropTypes.instanceOf(Contacto)
  };
  
export default ComponenteB;


