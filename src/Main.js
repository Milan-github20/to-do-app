import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Pacijenti from "./Pacijenti/pacijenti";
import Popup from "./Popup/Popup-modal";
import "./style.css";

const Main = () => {
  const [openModal, setOpenModal] = useState(false);
  const [value, setValue] = useState("");
  const [ucitavanje, setUcitavanje] = useState(false);
  const [pacijenti, setPacijenti] = useState([]);
  const [items, setItems] = useState([]);

  const fetchGradovi = async () => {
    const response = await fetch(
      "http://81.93.66.18:8234/api3.cfc?method=gradovi_lista"
    );
    const data = await response.json();

    const transformedData = data.gradovi.DATA.map((item) => {
      return {
        id_grad: item[0],
        naziv: item[1],
      };
    });
    setItems(transformedData);
  };

  useEffect(() => {
    fetchGradovi();
  }, []);

  const handleSearchIme = async (e) => {
    e.preventDefault();
    return await axios
      .get(
        `http://81.93.66.18:8234/api3.cfc?method=pacijent_trazi&ime=${value}`
      )
      .then((response) => {
        setValue("");

        const transformedData = response.data.lista_pacijenata.DATA.map(
          (item) => {
            const helper = items.findIndex((grad) => grad.id_grad === item[4]);
            return {
              id: item[0],
              prezime: item[1],
              ime: item[2],
              jmbg: item[3],
              grad: items[helper].naziv,
            };
          }
        );
        setPacijenti(transformedData);
        setUcitavanje(true);
      })
      .catch((err) => console.log(err));
  };

  const handleSearchJmbg = async (e) => {
    e.preventDefault();
    return await axios
      .get(
        `http://81.93.66.18:8234/api3.cfc?method=pacijent_trazi&jmbg=${value}`
      )
      .then((response) => {
        setValue("");

        const transformedData = response.data.lista_pacijenata.DATA.map(
          (item) => {
            const helper = items.findIndex((grad) => grad.id_grad === item[4]);
            return {
              id: item[0],
              prezime: item[1],
              ime: item[2],
              jmbg: item[3],
              grad: items[helper].naziv,
            };
          }
        );
        setPacijenti(transformedData);
        setUcitavanje(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="div--pocetni_input">
        <form onSubmit={handleSearchIme}>
          <input
            placeholder="Pretrazi pacijenta..."
            className="input--pretrazi_pacijenta"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></input>
          <button className="button--listing_pacijenata">Trazi</button>
        </form>
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
      {ucitavanje && <Pacijenti pacijenti={pacijenti} />}
    </div>
  );
};

export default Main;
