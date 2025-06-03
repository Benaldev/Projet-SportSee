import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="error-container">
      <h1 className="error-title">404</h1>
      <h2 className="error-message">
        Oups! La page que
        <br className="brError" /> vous demandez n'existe pas.
      </h2>
      <p>
        <Link to="/">Retourner sur la page d’accueil</Link>
      </p>
    </div>
  );
};

export default Error404;
