import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { helpHttp } from '../helpers/helpHttp'
import ClientForm from '../components/forms/ClientForm';

const api = helpHttp()

const EditClientPage = () => {
    let { id } = useParams()
    const [dataToEdit, setDataToEdit] = useState(null)

    useEffect(
        () => {
            const getData = async (url) => {
                const datajson = await api.get(url)
                let { id, name, lastName, email, cityOfResidence, 
                    password } = datajson[0]
                let client = {
                    id,
                    name,
                    lastName,
                    email,
                    cityOfResidence,
                    password
                }
                setDataToEdit(client)
            }
            getData(`http://localhost:5000/clients/edit/${id}`)
        },[]
    ) 

    return ( 
        <div>
            <h2>Edicion de datos del Cliente</h2>
            <hr />
            {
                dataToEdit && <ClientForm entryForm={dataToEdit} />
            }
        </div>
     );
}
 
export default EditClientPage;