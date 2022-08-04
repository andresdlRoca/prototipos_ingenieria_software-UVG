import React, { useState, useEffect, useRef } from "react";
import "./Ajustes.css";

export default function Ajustes() {
  const [entryState, setEntry] = useState("");

  const user = "placeholder123";

  const eliminarCuenta = (user) => {
    console.log(`Se elimino la cuenta ${user}`);
  };

  const deshablilitarCuenta = (user) => {
    console.log(`Se desahbilito la cuenta ${user}`);
  };

  return (
    <div className="Ajusteswrap">
      <p className="tituloAjustes">Ajustes de cuenta</p>
      <div className="DataEntryWrap">
        <div className="InfoSection">
          <p className="infotextAyuda">Correo Electronico: </p>
          <div className="DataEntry">hern19856@uvg.edu.gt</div>
        </div>
        <div className="InfoSection">
          <p className="infotextAyuda">Contraseña: </p>
          <div
            contentEditable={entryState === "contraseña"}
            className={
              entryState === "contraseña"
                ? "DataEntry enabled passwordentry"
                : "DataEntry passwordentry"
            }
          >
            123456789
          </div>
          <div className="editentry" onClick={() => setEntry("contraseña")}>
            Editar
          </div>
        </div>

        <div className="InfoSection">
          <p className="infotextAyuda">Correo de contacto: </p>
          <div
            contentEditable={entryState === "correocontact"}
            className={
              entryState === "correocontact" ? "DataEntry enabled" : "DataEntry"
            }
          >
            placeholder@gmail.com
          </div>
          <div className="editentry" onClick={() => setEntry("correocontact")}>
            Editar
          </div>
        </div>
        <div className="InfoSection">
          <p className="infotextAyuda">Contacto principal: </p>
          <div
            contentEditable={entryState === "contactmain"}
            className={
              entryState === "contactmain" ? "DataEntry enabled" : "DataEntry"
            }
          >
            +502 1234 5678
          </div>
          <div className="editentry" onClick={() => setEntry("contactmain")}>
            Editar
          </div>
        </div>
      </div>

      <div className="deletingWrap">
        <div
          className="DisableAccount"
          onClick={() => deshablilitarCuenta(user)}
        >
          Deshabilitar cuenta
        </div>
        <div className="DeleteAccount" onClick={() => eliminarCuenta(user)}>
          Eliminar cuenta
        </div>
      </div>
    </div>
  );
}
