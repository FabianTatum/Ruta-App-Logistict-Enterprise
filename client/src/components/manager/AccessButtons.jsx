import "./AccessButtons.css";

const AccessButtons = ({ entity, setEntity, setData }) => {
  return (
    <div className="buttons-manage-box row">
      <button
        className="col btn btn-success m-3"
        onClick={() => {
          if (entity !== "clients") {
            setData([]);
            setEntity("clients");
          }
        }}
      >
        Ver Clientes
      </button>
      <button
        className="col btn btn-success m-3"
        onClick={() => {
          if (entity !== "drivers") {
            setData([]);
            setEntity("drivers");
          }
        }}
      >
        Ver Conductores
      </button>
    </div>
  );
};

export default AccessButtons;
