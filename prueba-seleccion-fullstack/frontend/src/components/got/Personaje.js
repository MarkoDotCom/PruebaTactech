import React, { useState, useContext, useEffect } from "react";
import Axios from "axios";
import CardMaterial from "../MaterialCard/MaterialCardDemo"
import { BrowserRouter, Switch, Route , useParams} from "react-router-dom";



export default function Personajes() {
  // const [datos, setDatos] = useState([]);
  // let { id } = useParams();

  // useEffect(() => {
  //   getApi();
  // }, []);

  // const getApi = async () => {
  //   const data = await Axios.get("http://localhost:5000/got/characters/", {  params: {
  //     _id: id
  //   }});
  //   setDatos(data.data);
  // };

  return (
    <>
      <h2>Games of Thrones Personajes Libro</h2>
      <CardMaterial/>
    </>
  );
}
