import React from "react";
// import Gradovi from "../Gradovi/gradovi";
import "./pacijenti.css";

function Pacijenti(props) {
  return (
    <table className="tabela--tabela_pacijenti">
      <tbody>
        <tr className="tr--header_tr">
          <th>JMBG</th>
          <th>IME</th>
          <th>PREZIME</th>
          <th>GRAD</th>
        </tr>
        <hr className="hr--horizontalna_linija"></hr>
        {props.pacijenti.map((item) => (
          <tr key={item.id} className="tr--main_dio_tabele">
            <th>{item.jmbg}</th>
            <th>
              {item.ime.charAt(0).toUpperCase() +
                item.ime.slice(1).toLowerCase()}
            </th>
            <th>
              {item.prezime.charAt(0).toUpperCase() +
                item.prezime.slice(1).toLowerCase()}
            </th>
            <th>{item.grad}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Pacijenti;
