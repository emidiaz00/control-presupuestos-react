import CerrarBtn from '../img/cerrar.svg'

const Modal = () => {
  return (
    <div className="modal">
        <div className="cerrar-modal">
          <img 
          src={CerrarBtn} 
          alt="Cerrar Modal" />
        </div>
    </div>
  )
}

export default Modal