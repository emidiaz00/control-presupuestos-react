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
    placeholder="Añade la cantidad del gasto por ej: 300"
    name="" 
    />
    
    </form>
    
    </div>
    )
  }
  
  export default Modal