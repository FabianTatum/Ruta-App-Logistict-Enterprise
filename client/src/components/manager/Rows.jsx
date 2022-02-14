import React from 'react';

const Rows = ({ data }) => {
    return ( 
        <>
            <tr>
                <th scope="row">{data.id}</th>
                <td>{data.name}</td>
                <td>{data.lastName}</td>
                <td>{data.email}</td>
                <td>
                    <button type="button" className="btn btn-primary" >Editar</button>
                    <button type="button" className="btn btn-danger" >Eliminar</button>
                </td>
            </tr>
       </>
    );
}
 
export default Rows;