import React, { useState, useContext, useEffect } from "react";
// import React, { useState, useContext, useEffect } from "react";
// import { useHistory } from "react-router-dom";
// import UserContext from "../../context/UserContext";
import Pagination from "react-bootstrap-4-pagination";
import Axios from "axios";
import TablaMaterial from "../MaterialTable/MaterialTableDemo"
import ButtonMaterial from "../MaterialButton/MaterialButtonDemo"


export default function Personajes() {
  // const [datos, setDatos] = useState([]);

  // useEffect(() => {
  //   getApi();
  // }, []);

  // const getApi = async () => {
  //   const data = await Axios.get("http://localhost:5000/got/characters");
  //   setDatos(data.data);
  // };

  return (
    <>
      <h2>Games of Thrones Personajes Libro</h2>
      <TablaMaterial/>
    </>
  );
}
