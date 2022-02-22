import { useState, useEffect } from "react";
import AccessButtons from "../components/manager/AccessButtons";
import Table from "../components/manager/Table";
import "./ManagePage.css";
import { helpHttp } from "../helpers/helpHttp";

const api = helpHttp();

const ManagePage = () => {
  const [data, setData] = useState([]);
  const [entity, setEntity] = useState(null);
  const [deleteData, setDeleteData] = useState(null);

  useEffect(() => {
    if (!entity) return;
    const getData = async (url) => {
      let json = await api.get(url);
      let arr = [];
      json.forEach((e) => {
        arr.push(e);
      });
      console.log(arr);
      setData([...data, ...arr]);
    };
    getData(`http://localhost:5000/${entity}`);
  }, [entity]);

  useEffect(() => {
    if (!deleteData) return;
    const sendDelete = async () => {
      try {
        let isDelete = window.confirm("Esta seguro de borrar este elemento?");
        if (isDelete) {
          await api.del(`http://localhost:5000/${entity}/delete/${deleteData}`);
          let setear = data.filter((d) => d.id !== deleteData);
          setData(setear);
        }
      } catch (err) {
        window.prompt("No se borraron los datos");
      }
    };
    sendDelete();
  }, [deleteData]);

  return (
    <div className="manage-box bg-warning">
      <AccessButtons entity={entity} setEntity={setEntity} setData={setData} />
      {!entity ? (
        <h4 className="alert alert-danger">Haga click para ver listado</h4>
      ) : (
        <Table data={data} entity={entity} setDeleteData={setDeleteData} />
      )}
    </div>
  );
};

export default ManagePage;
