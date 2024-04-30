import { useState } from "react";

const EditReservierung = ({ reservierungItem, reservierungen, setReservierungen }) => {
  const [editStart, setEditStart] = useState(reservierungItem.Startdatum);
  const [editEnd, setEditEnd] = useState(reservierungItem.Enddatum);
  const [editBoot, setEditBoot] = useState(reservierungItem.Boot);

  const editClick = (e) => {
    e.preventDefault();

    const updateInfo = {
      Startdatum: editStart,
      Enddatum: editEnd,
      Boot: editBoot,
    };

    fetch(`http://localhost:3010/api/v1/reservierung/${reservierungItem._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateInfo),
    })
      .then((res) => res.json())
      .then((data) =>
        setReservierungen(reservierungen.map((item) => (item._id === reservierungItem._id ? data : item)))
      )
      .catch((err) => console.log(err));
  };

  return (
    <form className="{}">
      <input type="date" value={editStart} onChange={(e) => setEditStart(e.target.value)} />
      <input type="date" value={editEnd} onChange={(e) => setEditEnd(e.target.value)} />
      <input type="text" value={editBoot} onChange={(e) => setEditBoot(e.target.value)} />

      <button onClick={editClick}>✎ Bearbeiten</button>
    </form>
  );
};

export default EditReservierung;
