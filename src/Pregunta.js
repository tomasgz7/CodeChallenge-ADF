import React, {Fragment, useState} from 'react';

const Pregunta = () => {

    //Definir el State de la cantidad del presupuesto
    const  [fondos, setFondos] = useState(0);

    //Función que lee el presupuesto
    const definirPresupuesto = e => {
        setFondos (parseInt(e.target.value))
    }

    //Definir el presupuesto con el submit
    

    return (  
        <Fragment>
            <h2> Colocar el presupuesto</h2>

            <form>
             
                    <input 
                type='number'
                className='u-full-width'
                placeholder='Coloca el presupuesto'
                onChange={definirPresupuesto}
                />
               

            
                    <input 
                type='submit'
                className='button-primary u-full-width'
                value='Registrar'
                />
             
            </form>
        </Fragment>
    );
}
 
export default Pregunta;