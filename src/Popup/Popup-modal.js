import React from "react";
import "./popup.css";

const Popup = ({ closeModal }) => {
  return (
    <div className="div--backgorund_popup">
      <div className="div--closeModal">
        <span onClick={() => closeModal(false)} className="span--x">
          X
        </span>
      </div>
      <div className="div--popup_modal">
        <h2>Dodaj pacijenta</h2>
        <input
          placeholder="Ime pacijenta"
          required
          className="input--ime_pacijenta_dodaj"
        ></input>
        <input
          placeholder="Prezime pacijenta"
          required
          className="input--prezime_pacijenta_dodaj"
        ></input>
        <input
          placeholder="JMBG pacijenta"
          className="input--jmbg_dodaj"
        ></input>
        <div className="div--buttons">
          <button className="button--dodaj">Dodaj</button>
          <button onClick={() => closeModal(false)} className="button--otkazi">
            Otkazi
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
