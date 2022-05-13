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

        <form className="formulario" action="">
          <legend>Nuevo Gasto</legend>

        </form>

    </div>
  )
}

export default Modal