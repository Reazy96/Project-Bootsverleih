import { Link } from "react-router-dom";
import "./BootsUebersicht.css";
import { useState, useEffect } from "react";
import AddBoote from "../../components/AddBoote/AddBoote";

const BootsUebersicht = () => {
  // * State um alle Boote darin zu speichern
  const [allBoote, setAllBoote] = useState([]);

  // * Fetch für alle Boote
  useEffect(() => {
    fetch("http://localhost:3010/api/v1/boote")
      .then((res) => res.json())
      .then((data) => setAllBoote(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(allBoote);

  return (
    <>
      <h1>Alle Boote</h1>
      <AddBoote setAllBoote={setAllBoote} />
      <section className="all-boote">
        {allBoote?.map((item, index) => (
          <Link to={`/boote/${item._id}`} key={index}>
            <div>
              <img
                src="https://images.pexels.com/photos/6585322/pexels-photo-6585322.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <h3>{item.Boot}</h3>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
};

export default BootsUebersicht;
