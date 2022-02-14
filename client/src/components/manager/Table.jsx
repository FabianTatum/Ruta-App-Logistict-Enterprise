import React from 'react';
import Rows from './Rows'
 

const Table = ({ data }) => {
    return ( 
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">id#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellidos</th>
                        <th scope="col">Email</th>
                        <th scope="col">Editar / Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.length <= 0 ?
                        <tr><td>NO Existen datos</td></tr> : 
                        data.map( d => <Rows key={d.id} data={d}/>)
                    }
                </tbody>
            </table>
        </div>
     );
}
 
export default Table;