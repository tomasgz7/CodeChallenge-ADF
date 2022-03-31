import React, {useState} from 'react';
import Error from './Error';

const Formulario = () => {

    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);


    //Cuando el usuario agrega un gasto
    const agregarGasto = e => {
        e.preventDefault();

        //Validación
        if (cantidad < 1 || isNaN ( cantidad ) || nombre.trim() === '') {
            guardarError(true);
            return;
        }
        guardarError(false);


    }

    return (  

        <form
                onSubmit={agregarGasto}
        >
            <h2>Agregar tus gastos</h2>

            { error ? <Error  msg='Ambos campos son obligatorios o Presupuesto incorrecto' /> : null }

            <div className='campo'>
                <label>Nombre del Gasto</label>
                <input
                type='text'
                className='u-full-width'
                placeholder='Ej: Comida, Transporte, Accesorios, etc..'
                value={nombre}
                onChange={e => guardarNombre(e.target.value)}
                />
            </div>
            <div className='campo'>
                <label>Cantidad del Gasto</label>
                <input
                type='number'
                className='u-full-width'
                placeholder='Ej: 500, 10.000, 25.000, etc..'
                value={cantidad}
                onChange={e => guardarCantidad (parseInt(e.target.value, 10))}
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