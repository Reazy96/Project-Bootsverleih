// import { useEffect, useState } from "react";

// const DeleteBoote = () => {
//   // * State um alle Boote darin zu speichern
//   const [allBoote, setAllBoote] = useState([]);
//   const [bootItem, setBootItem] = useState();

//   allBoote.map((item) => {
//     setBootItem(item);
//     console.log(bootItem);

//     const deleteBoot = () => {
//       fetch(`http://localhost:3010/api/v1/boote/${bootItem._id}`, {
//         method: "DELETE",

//       })
//       .then((res)=>res.json())
//       .then((deletedBoot)=>{})

//     };
//   });
//   // * Fetch für alle Boote
//   useEffect(() => {
//     fetch("http://localhost:3010/api/v1/boote")
//       .then((res) => res.json())
//       .then((data) => setAllBoote(data))
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   return (
//     <>
//      
//     </>
//   );
// };

// export default DeleteBoote;
