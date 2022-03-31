import React, {Fragment} from 'react';
import { revisarPresupuesto } from '../helpers';
import PropTypes from 'prop-types';


const ControlGastos = ({presupuesto, restante}) => {
    return (  
        <Fragment>
           <div className='alert alert-primary'>
                Presupuesto: $ {presupuesto}
        </div> 
        <div className={revisarPresupuesto(presupuesto, restante)}>
                Restante: $ {restante}
        </div>
        </Fragment>
    );
}

ControlGastos.prototype = {
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired
}    
 
export default ControlGastos;