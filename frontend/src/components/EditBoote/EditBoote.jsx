import { useState } from "react";
import "./EditBoote.css";

const EditBoote = ({ bootId }) => {
  //  *states für Keys von Bootsobjekt
  const [bootsName, setBootsName] = useState("");
  const [bootsArt, setBootsArt] = useState("");
  const [material, setMaterial] = useState("");
  const [seriennummer, setSeriennummer] = useState("");
  const [baujahr, setBaujahr] = useState("");

  // *state für Toggle zum Anzeigen der Edit Form
  const [showEditForm, setShowEditForm] = useState(false);

  //   * Funktion zum Bearbeiten von Booten
  function editClick(e) {
    // Die neue Information die beim Bearbeiten gespeichert werden soll
    const updateInfo = {
      Boot: bootsName,
      Bootsart: bootsArt,
      Material: material,
      Seriennummer: seriennummer,
      Baujahr: baujahr,
    };

    // * Fetch von einem Boot, das wir über die item id ansprechen
    fetch(`http://localhost:3010/api/v1/boote/${bootId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateInfo),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));

    // damit nach bearbeiten die editForm wieder unsichtbar wird:
    setShowEditForm(false);
  }
  return (
    <>
      <button onClick={() => setShowEditForm(!showEditForm)}>Bearbeiten</button>
      <form className={showEditForm ? "showEditForm" : "notShowEditForm"}>
        <input
          placeholder="Bootsname"
          type="text"
          value={bootsName}
          onChange={(e) => setBootsName(e.target.value)}
        />
        <input
          placeholder="Bootsart"
          type="text"
          value={bootsArt}
          onChange={(e) => setBootsArt(e.target.value)}
        />
        <input
          placeholder="Material"
          type="text"
          value={material}
          onChange={(e) => setMaterial(e.target.value)}
        />
        <input
          placeholder="Seriennummer"
          type="text"
          value={seriennummer}
          onChange={(e) => setSeriennummer(e.target.value)}
        />
        <input
          placeholder="Baujahr"
          type="number"
          value={baujahr}
          onChange={(e) => setBaujahr(e.target.value)}
        />
        <button onClick={editClick}>Submit</button>
      </form>
    </>
  );
};

export default EditBoote;
