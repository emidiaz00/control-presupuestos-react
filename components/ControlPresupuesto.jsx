import React from 'react'

const ControlPresupuesto = ({presupuesto}) => {

    const formatearCantidad = (cantidad) => {
            return cantidad.toLocaleString(
                "en-US", {
                    style: "currency",
                    currency: "USD"
                })
    }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        <div>
            <p>Grafica aquí</p>

            <div className="contenido-presupuesto">
                <p>
                    <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
                </p>
            </div>
        </div>
    </div>
  )
}

export default ControlPresupuesto