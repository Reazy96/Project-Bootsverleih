import { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  // * State um alle Boote darin zu speichern
  const [allBoote, setAllBoote] = useState([]);
  // * State um alle Reservierungen darin zu speichern
  const [allReservierungen, setAllReservierungen] = useState([]);

  // * Fetch für alle Boote
  useEffect(() => {
    fetch("http://localhost:3010/api/v1/boote")
      .then((res) => res.json())
      .then((data) => setAllBoote(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // * Fetch für alle aktuellen Reservierungen
  useEffect(() => {
    fetch("http://localhost:3010/api/v1/reservierung")
      .then((res) => res.json())
      .then((data) => setAllReservierungen(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(allBoote.length);

  return (
    <section className="home">
      <div>
        <h3>Aktuelle Reservierungen:</h3>
        <p>{allReservierungen.length}</p>
      </div>
      <div>
        <h3>Verfügbaren Boote:</h3>
        <p>{allBoote.length - allReservierungen.length}</p>
      </div>
      <Link to="/boote">
        <div>
          <h3>Gesamtanzahl Boote:</h3>
          <p>{allBoote.length}</p>
        </div>
      </Link>
    </section>
  );
};

export default Home;
