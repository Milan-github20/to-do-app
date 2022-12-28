import React from "react";
import Home from "./components/Home";
import { useState, useEffect } from "react";
import Rezultat from "./components/Rezultat";
import styles from "./App.module.css";

const App = () => {
  const [podaci, setPodaci] = useState(getInitalUser());

  //FUNKCIJA ZA BRISANJE KORISNIKA IZ IMENIKA

  const deleteUser = (id) => {
    if (window.confirm("Da li zelite izbrisati korisnika?")) {
      setPodaci([
        ...podaci.filter((el) => {
          return el.id !== id;
        }),
      ]);

      alert("Korisnik je uspjesno izbrisan!");
    }
  };

  //FUNKCIJA ZA DODAVANJE KORISNIKA U IMENIK

  const dodajKorisnika = (user) => {
    setPodaci([...podaci, user]);
    alert("Korisnik je uspjesno dodat!");
  };

  //FUNKCIJA ZA DODAVANJE KORISNIKA U LOCAL STORAGE

  function getInitalUser() {
    console.log("test test");

    const tempo = localStorage.getItem("Podaci o korisniku");
    const loadedPodaciUser = JSON.parse(tempo);
    return loadedPodaciUser || [];
  }

  useEffect(() => {
    const tempo = JSON.stringify(podaci);
    localStorage.setItem("Podaci o korisniku", tempo);
  }, [podaci]);

  return (
    <div className={styles.main_main}>
      <div className={styles.naslov}>
        <p>TELEFONSKI IMENIK</p>
      </div>
      <div className={styles.div}>
        <Home dodajKorisnikaProps={dodajKorisnika} />
        <Rezultat
          podaci={podaci}
          setPodaci={setPodaci}
          deleteUser={deleteUser}
        />
      </div>
    </div>
  );
};

export default App;
