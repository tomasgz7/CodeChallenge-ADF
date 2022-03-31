import React, {useState} from 'react';


const Formulario = () => {

    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);

    return (  

        <form>
            <h2>Agregar tus gastos</h2>

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