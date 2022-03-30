import React, {Fragment} from 'react';

const Pregunta = () => {
    return (  
        <Fragment>
            <h2 className='subtitulo'>Colocar el presupuesto</h2>

            <form>
                <div className='formulario'>
                    <input 
                type='number'
                className='registro'
                placeholder='Coloca el presupuesto'
                />
                </div>

                <div className='formulario'>
                    <input 
                type='submit'
                className='registrar'
                value='Registrar'
                />
              </div>
            </form>
        </Fragment>
    );
}
 
export default Pregunta;