import Card from './components/Body/Card';
import ClientForm from './components/Forms/ClientForm';
import DriverForm from './components/Forms/DriverForm';
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
    </div>
    );
}

export default App;
