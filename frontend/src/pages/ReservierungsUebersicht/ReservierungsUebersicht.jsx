import { useEffect, useState } from "react";
import "./ReservierungsUebersicht.css";
import AddReservierung from "../../components/AddReservierung/AddReservierung";
import EditReservierung from "../../components/EditReservierung/EditReservierung";
import DeleteReservierungen from "../../components/DeleteReservierungen/DeleteReservierungen";

const ReservierungsUebersicht = () => {
  const [reservierungen, setReservierungen] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3010/api/v1/reservierung")
      .then((res) => res.json())
      .then((data) => setReservierungen(data))
      .catch((error) =>
        console.error("Error fetching all Reservierungen", error)
      );
  }, []);

  return (
    <section>
      <AddReservierung
        reservierungen={reservierungen}
        setReservierungen={setReservierungen}
      />

      {reservierungen?.map((item, index) => (
        <div key={index}>
          <h3>{item?.Boot}</h3>
          <p>{item?.Startdatum}</p>
          <p>{item?.Enddatum}</p>
          <EditReservierung
            reservierungItem={item}
            reservierungen={reservierungen}
            setReservierungen={setReservierungen}
          />
          <DeleteReservierungen
            reservierungItem={item}
            reservierungen={reservierungen}
            setReservierungen={setReservierungen}
          />
        </div>
      ))}
    </section>
  );
};

export default ReservierungsUebersicht;
