import React, {Fragment, useState} from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Pregunta = ({ guardarPresupuesto, guardarRestante, actualizarPregunta }) => {

        //Definir el State de la cantidad del presupuesto
        const  [fondos, setFondos] = useState(0);
        const [err, setErr] = useState (false);

        //Función que lee el presupuesto
        const definirPresupuesto = e => {
            setFondos (parseInt( e.target.value ))
     }

        //Definir el presupuesto con el submit
        const agregarPresupuesto = e => {
            e.preventDefault();

        //Validar
        if( fondos < 1 || isNaN ( fondos ) ) {
            setErr(true);
            return;
        }

        //Si pasa la validación 
        setErr(false);
        guardarPresupuesto(fondos);
        guardarRestante(fondos);
        actualizarPregunta(false);
    }

    return (  
        <Fragment>
            <h2> Colocar el presupuesto</h2>
               
                { err ? <Error msg="Colocar un Presupuesto válido" />  : null}

            <form
                onSubmit={agregarPresupuesto}
            >
             
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

Pregunta.prototype = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired
 
 }
 
export default Pregunta;