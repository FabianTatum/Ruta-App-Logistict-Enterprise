
const AccessButtons = ({ setEntity }) => {
    return ( 
        <div className='container'>
                <button 
                    className="btn btn-success" 
                    onClick={ () => setEntity("clients")}
                >Ver Clientes</button>
                <button 
                    className="btn btn-success" 
                    onClick={ () => setEntity("drivers")} 
                >Ver Conductores</button>
        </div>
     );
}

export default AccessButtons;