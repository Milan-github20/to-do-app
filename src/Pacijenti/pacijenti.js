import { useState, useEffect } from "react";
import React from "react";
// import Gradovi from "../Gradovi/gradovi";
import "./pacijenti.css";

function Pacijenti() {
  const [items, setItems] = useState([]);

  const fetchPacijenti = async () => {
    const response = await fetch(
      "http://81.93.66.18:8234/api3.cfc?method=pacijent_trazi&id=200"
    );
    const data = await response.json();

    const transformedData = data.lista_pacijenata.DATA.map((item) => {
      return {
        id: item[0],
        prezime: item[1],
        ime: item[2],
        jmbg: item[3],
        id_grad: item[4],
      };
    });
    setItems(transformedData);
  };

  const fetchGradovi = async () => {
    const response = await fetch(
      "http://81.93.66.18:8234/api3.cfc?method=gradovi_lista"
    );
    const data = await response.json();

    console.log(data);
    const transformedData = data.gradovi.DATA.map((item) => {
      return {
        id_grada: item[0],
        naziv: item[1],
      };
    });
    setItems(transformedData);
  };

  useEffect(() => {
    fetchPacijenti();
    // fetchGradovi();
  }, []);

  // function selectUser() {
  //   return <div>Radi</div>;
  // }

  return (
    <table className="tabela--tabela_pacijenti">
      <tr className="tr--header_tr">
        <th>JMBG</th>
        <th>Ime</th>
        <th>Prezime</th>
        <th>Grad</th>
      </tr>
      <tr>
        <hr className="hr--horizontalna_linija" />
      </tr>
      {items.map((item) => (
        <tr key={item.id} className="tr--main_dio_tabele">
          <th>{item.jmbg}</th>
          <th>{item.ime}</th>
          <th>{item.prezime}</th>
          <th>{item.id_grad}</th>
          {/* <Gradovi /> */}
        </tr>
      ))}
    </table>
  );
}

export default Pacijenti;
