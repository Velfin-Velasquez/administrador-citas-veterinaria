import React, { Fragment, useEffect, useState } from "react";
import { Cita } from "./components/Cita";
import { Formulario } from "./components/Formulario";

function App() {

  //citas en localStored
  let citasiniciales = JSON.parse(localStorage.getItem("citas"));
  if (!citasiniciales) {
    citasiniciales = [];
  }

  //arreglo de citas
  const [citas, crearcita] = useState(citasiniciales);

  //useEffect para realizar ciertas operaciones cuando el state cambia
  useEffect(() => {
    if (citasiniciales) {
      localStorage.setItem('citas', JSON.stringify(citas));
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas]);

  //funcion para guardar las citas
  const crearCita = (cita) => {
    crearcita([...citas, cita]);
  };

  //funcion para eliminar
  const eliminarCita = (id) => {
    const nuevascitas = citas.filter((cita) => cita.id !== id);
    crearcita(nuevascitas);
  };

  //titulo condicional
  const titulo = citas.length === 0 ? "No hay citas" : "Administra tus citas";

  return (
    <Fragment>
      <h1>Administrador de citas</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map((cita) => (
              <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
