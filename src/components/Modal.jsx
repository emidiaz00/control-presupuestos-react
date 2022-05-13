import CerrarBtn from '../img/cerrar.svg'



const Modal = ({setModal, animarModal}) => {
  
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
    name="" 
    />
    
    <div className="campo">
    <label htmlFor="cantidad">Cantidad</label>
    </div>
    
    <input 
    id="cantidad" 
    type="number" 
    placeholder="Añade la cantidad del gasto por ej:"
    name="" 
    />
    
    <div className="campo">
    <label htmlFor="categoria">Categoría</label>
    </div>
    
    <select 
    name="" 
    id="categoria">
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