import React, {useState, useEffect} from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlGastos from './components/ControlGastos';


function App() {

  // Aca se va a definir el state
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarPregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState ([]);
  const [gasto, guardarGasto] = useState ({});
  const [creargasto, guardarCrearGasto] = useState (false);

    // Para actulizar el restante del gasto o presupuesto, se agrega useEffect
    useEffect (() => {
        if (creargasto) {

          //Se agrega el nuevo presupuesto
          guardarGastos([
            ...gastos,
            gasto
          ]);

          //Resta el presupuesto actual
          const presupuestoRestante = restante - gasto.cantidad;
          guardarRestante(presupuestoRestante);
          
    //Resetear a False
    guardarCrearGasto(false);

        }
    }, [gasto]);

   

  return (
    <div className='container'>
    <header>
        <h1>Administración de fondos</h1>
     
        <div className='contenido-principal contenido'>
          { mostrarPregunta ? 
          (
            <Pregunta 
            guardarPresupuesto={guardarPresupuesto}
            guardarRestante={guardarRestante}
            actualizarPregunta={actualizarPregunta}
            />
          ) :  (
            <div className='row'>
          <div className='one-half column'>
              <Formulario
                  guardarGasto={guardarGasto}
                  guardarCrearGasto={guardarCrearGasto}
              />
         </div>
          <div className='one-half column'>
                <Listado 
                  gastos={gastos}
                />

                <ControlGastos 
                  presupuesto={presupuesto}
                  restante={restante}
                />
         </div>
        
      </div>
             )
          }
        

        
    </div>
  </header>
</div>
);
}

export default App;
