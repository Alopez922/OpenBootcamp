import React, {useEffect} from 'react'

 const AllCycles = () => {
    useEffect(() => {
      console.log('Componente Creado')
    
        const intervalId = setInterval(()=>{
            document.title = `${new Date()} `
            console.log('Actualizacion del componente')
        },1000);

      return () => {
        console.log('Componente va a desparecer')
        document.title = "Tiempo detenido";
        clearInterval(intervalId);
      }
    }, [third])
    
  return (
    <div>AllCycles</div>
  )
}
