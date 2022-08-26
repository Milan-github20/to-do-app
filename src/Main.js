import React from "react";
import { useState } from "react";
import Popup from "./Popup/Popup-modal";
import "./style.css";

const Main = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <div className="div--pocetni_input">
        <input
          placeholder="Pretrazi pacijenta..."
          className="input--pretrazi_pacijenta"
        ></input>
        <button className="button--listing_pacijenata">Trazi</button>
        <button
          className="button--dodaj_pacijenta"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Dodaj pacijenta
        </button>
      </div>
      <div className="div--popup">
        {openModal && <Popup closeModal={setOpenModal} />}
      </div>
    </div>
  );
};

export default Main;
