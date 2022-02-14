import React from 'react';
import './Card.css'
import { Link } from 'react-router-dom'

const Card = () => {
    return( 
        <>
            <div className="card">
                <img src="" className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">Conductores</h5>
                    <p className="card-text">Formulario de inscripcion para Conductores</p>
                    <Link to='/driver'><button className="btn btn-primary">Ir a formulario</button></Link>
                </div>
            </div>
            <div className="card">
                <img src="" className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">Clientes</h5>
                    <p className="card-text">Formulario de inscripcion para Clientes</p>
                    <Link to='/client'><button className="btn btn-primary">Ir a formulario</button></Link>
                </div>
            </div>
        </>
    );
}
 
export default Card;