import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="card-box bg-warning">
      <div className="row">
        <div className="card col p-2 m-2">
          <img
            src={`../img/img-card-1.jpg`}
            className="card-img-top"
            alt="tractomula"
          />
          <div className="card-body">
            <h5 className="card-title">Conductores</h5>
            <p className="card-text">
              Formulario de inscripcion para Conductores
            </p>
            <Link to="/drivers">
              <button className="btn btn-primary">Ir a formulario</button>
            </Link>
          </div>
        </div>
        <div className="card col p-2 m-2">
          <img src={`../img/img-card-2.jpg`} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">Clientes</h5>
            <p className="card-text">Formulario de inscripcion para Clientes</p>
            <Link to="/clients">
              <button className="btn btn-primary">Ir a formulario</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
