import React from "react";
import styles from "./Rezultat.module.css";

const Rezultat = (props) => {
  return (
    <table className={styles.pretraga}>
      <thead className={styles.thead}>
        <tr>
          <th>Ime</th>
          <th>Broj Telefona</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.podaci.map((e) => (
          <tr key={e.id}>
            <td className={styles.td}>{e.ime}</td>
            <td>{e.broj}</td>
            <td>
              <img
                src="./assets/close.png"
                alt="delete"
                onClick={() => props.deleteUser(e.id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Rezultat;
