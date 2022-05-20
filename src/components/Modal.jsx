import CerrarBtn from "../img/cerrar.svg";
import { useState } from "react";
import Mensaje from "./Mensaje";

const Modal = ({ setModal, animarModal, setAnimarModal, guardarGasto }) => {
  // hook para mostrar mensaje de todos los campos son obligatorios
  const [mensaje, setMensaje] = useState("");

  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [categoria, setCategoria] = useState("");

  // función para ocultar modal
  const ocultarModal = () => {
    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const handleSubmit = (e) => {
    // prevent default para evitar la acción de enviar form
    e.preventDefault();

    // si contiene nombre, cantidad o categoria vacio muestra mensaje
    if ([nombre, cantidad, categoria].includes("")) {
      setMensaje("Todos los campos son obligatorios");

      // después de 2 segs desaparece mensaje de todos los campos son obligatorios
      setTimeout(() => {
        setMensaje("");
      }, 2000);
      return;
    }

    guardarGasto({ nombre, cantidad, categoria });
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarBtn} alt="cerrar modal" onClick={ocultarModal} />
      </div>

      <form
        onSubmit={handleSubmit}
        className={`formulario ${animarModal ? "animar" : "cerrar"}`}
      >
        <legend>Nuevo Gasto</legend>
        {/* si mensaje está muestra mensaje de todos los campos son obligatorios */}
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>
        </div>

        <input
          id="nombre"
          type="text"
          placeholder="Añade el nombre del Gasto"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
        </div>

        <input
          id="cantidad"
          type="number"
          placeholder="Añade la cantidad del gasto por ej:"
          value={cantidad}
          onChange={(e) => setCantidad(Number(e.target.value))}
        />

        <div className="campo">
          <label htmlFor="categoria">Categoría</label>
        </div>

        <select
          id="categoria"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option value="">-- Seleccione --</option>
          <option value="ahorro">Ahorro</option>
          <option value="comida">Comida</option>
          <option value="casa">Casa</option>
          <option value="salud">Salud</option>
          <option value="suscripciones">Suscripciones</option>
          <option value="cuentas">Cuentas</option>
          <option value="ocio">Ocio</option>
          <option value="otros">Otros</option>
        </select>

        <input type="submit" value="Añadir Gasto" />
      </form>
    </div>
  );
};

export default Modal;
