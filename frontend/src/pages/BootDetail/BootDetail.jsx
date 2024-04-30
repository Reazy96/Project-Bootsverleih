import { useEffect, useState } from "react";
import "./BootDetail.css";
import { useParams } from "react-router-dom";
import DeleteBoote from "../../components/DeleteBoote/DeleteBoote";
import EditBoote from "../../components/EditBoote/EditBoote";

const BootDetail = () => {
  // * State um bestimmtes Boot darin zu speichern
  const [singleBoot, setSingleBoot] = useState();

  // * useParams für bootId
  const { bootId } = useParams();

  // * Fetch für single Boot
  useEffect(() => {
    fetch(`http://localhost:3010/api/v1/boote/${bootId}`)
      .then((res) => res.json())
      .then((data) => setSingleBoot(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="boot-detail">
      <img
        src="https://images.pexels.com/photos/6585322/pexels-photo-6585322.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=""
      />
      <div>
        <h3>{singleBoot?.Boot}</h3>
        <p>Bootsart: {singleBoot?.Bootsart}</p>
        <p>Material: {singleBoot?.Material}</p>
        <p>Seriennummer: {singleBoot?.Seriennummer}</p>
        <p>Baujahr: {singleBoot?.Baujahr}</p>
        <DeleteBoote bootId={bootId} />
        <EditBoote bootId={bootId} />
      </div>
    </section>
  );
};

export default BootDetail;
