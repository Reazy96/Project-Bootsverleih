const DeleteReservierungen = ({
  reservierungItem,
  reservierungen,
  setReservierungen,
}) => {
  function deleteReservierung() {
    fetch(`http://localhost:3010/api/v1/reservierung/${reservierungItem._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((deletedReservierung) => {
        setReservierungen(
          // alle Items (Reservierungen), die nicht die gleiche Id haben, wie die deletedReservierung._id sollen gefiltert
          // und ausgegeben werden
          reservierungen.filter((item) => item._id !== deletedReservierung._id)
        );
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <button onClick={deleteReservierung}>Löschen</button>
    </>
  );
};

export default DeleteReservierungen;
