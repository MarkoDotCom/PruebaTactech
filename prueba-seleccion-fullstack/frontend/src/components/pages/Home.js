import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";

export default function Home() {
  const { userData } = useContext(UserContext);

  return (
    <div className="page">
      {userData.user ? (
        <h1>Bienvenido, {userData.user.displayName}</h1>
      ) : (
        <>
          <h2>No tienes una sesión activa</h2>
          <Link to="/login">Iniciar Sesión</Link>
        </>
      )}
    </div>
  );
}
