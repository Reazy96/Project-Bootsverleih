import { useState } from "react";
import "./EditReservierung.css";
import DeleteReservierungen from "../DeleteReservierungen/DeleteReservierungen";

// wir holen uns über props das gemappte item, alle Reservierungen und den setter setReservierungen
const EditReservierung = ({
  reservierungItem,
  reservierungen,
  setReservierungen,
}) => {
  //  *states für Keys von Reservierungsobjekt
  const [editStart, setEditStart] = useState(reservierungItem.Startdatum);
  const [editEnd, setEditEnd] = useState(reservierungItem.Enddatum);
  const [editBoot, setEditBoot] = useState(reservierungItem.Boot);

  // *state für Toggle zum Anzeigen der Edit Form
  const [showEditForm, setShowEditForm] = useState(false);

  // * Funktion zum Editieren, die mit dem Bearbeiten-Button aufgerufen wird
  const editClick = (e) => {
    e.preventDefault();

    // Die neue Information die beim Bearbeiten gespeichert werden soll
    const updateInfo = {
      Startdatum: editStart,
      Enddatum: editEnd,
      Boot: editBoot,
    };

    // * Fetch von einer Reservierung, die wir über die item id ansprechen
    fetch(`http://localhost:3010/api/v1/reservierung/${reservierungItem._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        // unter "data" verbirgt sich nur das bearbeitete Objekt. Um alle Reservierungen + die bearbeitete Reservierung zu erhalten mappen wir durch alle
        // Reservierungen und sagen dann: Wenn eine Id mit der Id von der zu bearbeitenden Reservierung übereinstimmt, dann nimm die neuen Daten (data), ansonsten
        // nimm die normalen Daten (item)
        setReservierungen(
          reservierungen.map((item) =>
            item._id === reservierungItem._id ? data : item
          )
        );
        // damit nach bearbeiten die editForm wieder unsichtbar wird:
        setShowEditForm(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <form className={showEditForm ? "showEditForm" : "notShowEditForm"}>
        <input
          type="date"
          value={editStart}
          onChange={(e) => setEditStart(e.target.value)}
        />
        <input
          type="date"
          value={editEnd}
          onChange={(e) => setEditEnd(e.target.value)}
        />
        <input
          type="text"
          value={editBoot}
          onChange={(e) => setEditBoot(e.target.value)}
        />

        <button onClick={editClick}>Submit</button>
      </form>
      <button onClick={() => setShowEditForm(!showEditForm)}>Bearbeiten</button>
    </>
  );
};

export default EditReservierung;
