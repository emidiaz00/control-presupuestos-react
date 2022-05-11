import CerrarBtn from '../img/cerrar.svg'



const Modal = ({setModal}) => {

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
    </div>
  )
}

export default Modal