import CerrarBtn from '../img/cerrar.svg'
import { useState } from 'react';



const Modal = ({setModal, animarModal, setAnimarModal}) => {

  const [nombre, setNombre] = useState('')
  const [cantidad, setCantidad] = useState('')
  const [categoria, setCategoria] = useState('')
  
  const OcultarModal = () => {
    setModal(false)
  }
  
  return (
    <div className="modal">
    <div className="cerrar-modal">
    <img 
    src={CerrarBtn} 
    alt="Cerrar Modal"
    onClick={OcultarModal} />
    </div>
    
    
    <form 
    className={`formulario ${animarModal ? "animar" : 'cerrar'}`}>
    <legend>Nuevo Gasto</legend>
    
    <div className="campo">
    <label htmlFor="nombre">Nombre Gasto</label>
    </div>
    
    <input 
    id="nombre"
    type="text" 
    placeholder="Añade el nombre del Gasto"
    value={nombre}
    onChange={ e => setNombre(e.target.value)}
    />
    
    <div className="campo">
    <label htmlFor="cantidad">Cantidad</label>
    </div>
    
    <input 
    id="cantidad" 
    type="number" 
    placeholder="Añade la cantidad del gasto por ej:"
    value={cantidad}
    onChange={ e => setCantidad(Number(e.target.value))}
    />
    
    <div className="campo">
    <label htmlFor="categoria">Categoría</label>
    </div>
    
    <select 
    name="" 
    id="categoria"
    value={categoria}
    onChange={ e => setCategoria(e.target.value)}
    >
    <option value="">-- Seleccione --</option>
    <option value="">Ahorro</option>
    <option value="">Comida</option>
    <option value="">Casa</option>
    <option value="">Salud</option>
    <option value="">Suscripciones</option>
    <option value="">Cuentas</option>
    <option value="">Ocio</option>
    <option value="">Otros</option>
    </select>

    <input type="submit" value="Añadir Gasto" />
    
    </form>
    
    </div>
    )
  }
  
  export default Modal