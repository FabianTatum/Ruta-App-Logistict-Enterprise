import React from 'react';
import { Link } from 'react-router-dom'

const Rows = ({ data, entity, setDeleteData }) => {
    return ( 
        <>
            <tr>
                <th scope="row">{data.id}</th>
                <td>{data.name}</td>
                <td>{data.lastName}</td>
                <td>{data.email}</td>
                <td>
                    <Link to={`/manage/${entity}/edit/${data.id}`}>
                        <button type="button" className="btn btn-primary" >
                            Editar
                        </button>
                    </Link>
                    <button 
                        type="button" 
                        className="btn btn-danger" 
                        onClick={() => {
                            setDeleteData(data.id)
                        }}
                    >Eliminar
                    </button>
                </td>
            </tr>
        </>
    );
}
 
export default Rows;