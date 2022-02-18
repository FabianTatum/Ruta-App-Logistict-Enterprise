import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DriverForm from '../components/forms/DriverForm'

import { helpHttp } from '../helpers/helpHttp'

const api = helpHttp()

const EditDriverPage = () => {
    const { id } = useParams()
    const [dataToEdit, setDataToEdit] = useState(null)

    useEffect(
        () => {
            const getData = async (url) => {
                const datajson = await api.get(url)
                let { id, name, lastName, identification, dateOfBirth,
                    phone, email, password, terms } = datajson[0]
                    dateOfBirth = dateOfBirth.slice(0, 10)
                let driver = {
                    id,
                    name,
                    lastName,
                    email,
                    identification,
                    dateOfBirth,
                    phone,
                    password,
                    terms
                }
                setDataToEdit(driver)
            }
            getData(`http://localhost:5000/drivers/edit/${id}`)
        },[]
    ) 

    return ( 
        <div>
            <h2>Edicion de datos del Cliente</h2>
            <hr />
            {
                dataToEdit && <DriverForm entryForm={dataToEdit} />
            }
        </div>
    );
}
 
export default EditDriverPage;