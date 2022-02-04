import Card from './components/Body/Card';
import ClientForm from './components/Forms/ClientForm';
import DriverForm from './components/Forms/DriverForm';
import VehicleForm from './components/Forms/VehicleForm';
import Header from './components/Header/Header'

function App() {
  return (
    <div>
      <Header/>
      <Card/>
      <hr />
      <DriverForm/>
      <hr />
      <ClientForm/>
      <hr />
      <VehicleForm/>
      <hr />
    </div>
    );
}

export default App;
