import React from "react";

export const Cita = ({ cita, eliminarCita }) => {
  const { mascota, propietario, fecha, hora, sintomas } = cita;
  return (
    <div className="cita">
      <p>
        Mascota: <span>{mascota}</span>
        <br />
        Propietario: <span>{propietario}</span>
        <br />
        Fecha: <span>{fecha}</span>
        <br />
        Hora: <span>{hora}</span>
        <br />
        Sintomas: <span>{sintomas}</span>
      </p>
      <button
        onClick={() => eliminarCita(cita.id)}
        className="button eliminar u-full-width"
      >
        Eliminar &times;
      </button>
    </div>
  );
};
