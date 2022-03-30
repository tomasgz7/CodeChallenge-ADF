import React, {useState} from 'react';


const Formulario = () => {
    return (  

        <form>
            <h2>Agregar tus gastos</h2>

            <div className='campo'>
                <label>Nombre del Gasto</label>
                <input
                type='text'
                className='u-full-width'
                placeholder='Ej: Comida, Transporte, Accesorios, etc..'
                />
            </div>
            <div className='campo'>
                <label>Nombre del Gasto</label>
                <input
                type='number'
                className='u-full-width'
                placeholder='Ej: 500, 10.000, 25.000, etc..'
                />
            </div>

                <input
                type='submit'
                className='button-primary u-full-width'
                value='Agregar Gasto'
                />
        </form>
    );
}
 
export default Formulario;