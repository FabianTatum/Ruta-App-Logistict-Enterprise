import React from 'react';

const Card = () => {
    return( 
        <>
            <div className="card">
                <img src="" className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">Conductores</h5>
                    <p className="card-text">Formulario de inscripcion para Conductores</p>
                    <a href="index.html" className="btn btn-primary">Ir a formulario</a>
                </div>
            </div>
            <div className="card">
                <img src="" className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">Clientes</h5>
                    <p className="card-text">Formulario de inscripcion para Clientes</p>
                    <a href="index.html" className="btn btn-primary">Ir a formulario</a>
                </div>
            </div>
        </>
    );
}
 
export default Card;