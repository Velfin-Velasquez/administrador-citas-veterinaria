import React, { Fragment, useState } from "react";
import { v4 as uuid } from "uuid";

export const Formulario = ({ crearCita }) => {
  //state cita
  const [cita, setcita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  //state error
  const [error, actualizarError] = useState(false);

  //funcion que se ejecuta cada vez que cambia el input
  const actualizarState = (e) => {
    setcita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  //extraer valores de los inputs
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  //funcion cuando agrega cita
  const sumitCita = (e) => {
    e.preventDefault();

    //validad
    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      actualizarError(true);
      return;
    }

    actualizarError(false);

    //asignar id
    cita.id = uuid();

    //crear cita
    crearCita(cita);

    //reiniciar campos
    setcita({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  return (
    <Fragment>
      <h2>Crear cita</h2>
      {error ? <p className="alerta-error">Hay campos vacios</p> : null}
      <form onSubmit={sumitCita}>
        <label>Nombre de mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre mascota"
          onChange={actualizarState}
          value={mascota}
        />

        <label>Nombre de dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre propietario"
          onChange={actualizarState}
          value={propietario}
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />

        <label>Síntomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={actualizarState}
          value={sintomas}
        ></textarea>

        <button className="u-full-width button-primary">Agregar</button>
      </form>
    </Fragment>
  );
};
