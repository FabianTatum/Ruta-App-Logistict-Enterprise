import { useState, useEffect } from 'react'
import AccessButtons from '../components/manager/AccessButtons'
import Table from '../components/manager/Table'
import { helpHttp } from '../helpers/helpHttp';

const api = helpHttp()

const ManagePage = () => {
    const [data, setData] = useState([])
    const [entity, setEntity] = useState(null)

    useEffect(
        () => {
            const getData = async (url) => {
                let json = await api.get(url)
                let arr = [];
                json.forEach( e => {
                    arr.push(e)
                })
                console.log(arr)
                setData([...data, ...arr])
            }
            getData(`http://localhost:3001/${entity}`)
    }, [entity])

    return ( 
        <div>
            <AccessButtons setEntity={setEntity}/>
            {
                entity === null ?
                <h2>No hay datos</h2> :
                <Table data={data}/> 
            }
       </div>
     );
}
 
export default ManagePage;