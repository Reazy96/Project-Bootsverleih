const DeleteBoote = ({ bootId }) => {
  const deleteBoot = () => {
    fetch(`http://localhost:3010/api/v1/boote/${bootId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));

    //   um nach Löschen zurück zur Übersicht zu gelangen:
    history.back();
  };

  return (
    <>
      <button onClick={deleteBoot}>Löschen</button>
    </>
  );
};

export default DeleteBoote;
