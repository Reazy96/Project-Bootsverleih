import { useState } from "react";

const AddBoote = ({ setAllBoote }) => {
  const [addName, setAddName] = useState("");
  const [addBaujahr, setAddBaujahr] = useState("");
  const [addSerNr, setAddSerNr] = useState("");
  const [addMaterial, setAddMaterial] = useState("");
  const [addBootsart, setAddBootsart] = useState("");

  const addClick = (e) => {
    e.preventDefault();

    const neuesBoot = {
      Boot: addName,
      Baujahr: addBaujahr,
      Seriennummer: addSerNr,
      Material: addMaterial,
      Bootsart: addBootsart,
    };

    fetch("http://localhost:3010/api/v1/boote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(neuesBoot),
    })
      .then((res) => res.json())
      .then((data) => {
        setAllBoote((prevBoote) => [...prevBoote, data]);
      })
      .catch((err) => console.log(err));
    setAddName("");
    setAddBaujahr("");
    setAddSerNr("");
    setAddMaterial("");
    setAddBootsart("");
  };

  return (
    <form>
      <input type="text" placeholder="Bootsname" value={addName} onChange={(e) => setAddName(e.target.value)} />
      <input
        type="number"
        placeholder="Baujahr"
        value={addBaujahr}
        onChange={(e) => setAddBaujahr(e.target.value)}
      />
      <input
        type="text"
        placeholder="Seriennummer"
        value={addSerNr}
        onChange={(e) => setAddSerNr(e.target.value)}
      />
      <input
        type="text"
        placeholder="Material"
        value={addMaterial}
        onChange={(e) => setAddMaterial(e.target.value)}
      />
      <input
        type="text"
        placeholder="Bootsart"
        value={addBootsart}
        onChange={(e) => setAddBootsart(e.target.value)}
      />

      <button onClick={addClick}>Submit</button>
    </form>
  );
};

export default AddBoote;
