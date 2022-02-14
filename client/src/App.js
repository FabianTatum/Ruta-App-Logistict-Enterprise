import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header'
import HomePage from './pages/HomePage';
import ClientPage from './pages/ClientPage'
import DriverPage from './pages/DriverPage'
import ManagePage from './pages/ManagePage'

function App() {
  return(
    <div>
      <Router>
        <Header/>
        <Switch>
          <Route path="/manage/drivers" />
          <Route path="/manage/clients" />
          <Route path="/manage" component={ManagePage} />
          <Route path="/drivers" component={DriverPage} />
          <Route path="/clients" component={ClientPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
