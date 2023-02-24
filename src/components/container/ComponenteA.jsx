import React from 'react'
import {Contacto} from "../../models/contacto.class"
import ComponenteB from "../pure/ComponenteB"

const ComponenteA = () => {

  const defaultContact = new Contacto('Alirio','Lopez','Alopez922@hotmail.com', false)

  return (
    <div>
        <div>
          <h1>
            Contacto
          </h1>
          <ComponenteB contacto={defaultContact}/>
        </div>

    </div>
  )
}

export default ComponenteA;
