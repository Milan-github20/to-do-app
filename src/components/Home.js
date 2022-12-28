import React from "react";
import styles from "./Home.module.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Home = ({ dodajKorisnikaProps }) => {
  const [ime, setIme] = useState("");
  const [broj, setBroj] = useState("");

  const dodajKorisnika = (e) => {
    e.preventDefault();
    dodajKorisnikaProps({
      id: uuidv4(),
      ime,
      broj,
    });
    setIme("");
    setBroj("");
  };

  return (
    <div className={styles.home}>
      <div className={styles.main_div}>
        <div className={styles.unos_kontakta}>
          <form onSubmit={dodajKorisnika}>
            <input
              placeholder="Ime"
              required
              type="text"
              name="Ime"
              id="Ime"
              value={ime}
              onChange={(e) => setIme(e.target.value)}
            />
            <input
              placeholder="Broj telefona"
              required
              type="text"
              name="Broj"
              id="Broj"
              value={broj}
              onChange={(e) => setBroj(e.target.value)}
            />
            <div>
              <button value="Add">Dodaj</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
