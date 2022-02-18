
const AccessButtons = ({ entity, setEntity, setData }) => {
    return ( 
        <div className='container'>
                <button 
                    className="btn btn-success" 
                    onClick={ 
                        () => {
                            if(entity !== "clients"){
                                setData([])
                                setEntity("clients")
                            }
                        }
                    }
                >Ver Clientes</button>
                <button 
                    className="btn btn-success" 
                    onClick={
                        () => {
                            if(entity !== "drivers"){
                                setData([])
                                setEntity("drivers")
                            }
                        }
                    } 
                >Ver Conductores</button>
        </div>
     );
}

export default AccessButtons;