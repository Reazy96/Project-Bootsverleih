import { useState } from "react";

const AddReservierung = ({ setReservierungen }) => {
  const [addStart, setAddStart] = useState("");
  const [addEnd, setAddEnd] = useState("");
  const [addBoot, setAddBoot] = useState("");

  // Funktion um neue Reservierung hinzuzufügen
  const addClick = (e) => {
    e.preventDefault();
    const neueReservierung = {
      Startdatum: addStart,
      Enddatum: addEnd,
      Boot: addBoot,
    };

    fetch("http://localhost:3010/api/v1/reservierung", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(neueReservierung),
    })
      .then((res) => res.json())
      .then((data) => {
        setReservierungen((prevReservierungen) => [...prevReservierungen, data]); // Füge die neue Reservierung zur aktuellen Liste hinzu
      })
      .catch((err) => console.log(err));

    // Zum Entleeren der Inputfelder (Reset)
    setAddStart("");
    setAddEnd("");
    setAddBoot("");
  };

  return (
    <form>
      <input type="date" value={addStart} onChange={(e) => setAddStart(e.target.value)} />
      <input type="date" value={addEnd} onChange={(e) => setAddEnd(e.target.value)} />
      <input type="text" value={addBoot} onChange={(e) => setAddBoot(e.target.value)} />
      <button onClick={addClick}>Submit</button>
    </form>
  );
};

export default AddReservierung;
