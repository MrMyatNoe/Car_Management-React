import Topbar from "./components//topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from './pages/home/Home';
import { HashRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import RoleList from './pages/roleList/RoleList'
import Role from "./pages/role/Role";
import NewRole from "./pages/newRole/NewRole";
import CarList from "./pages/carList/CarList";

function App() {
  return (
    <Router>
      <div>
        <Topbar/>
        <div className="container">
          <Sidebar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/roles">
              <RoleList />
            </Route>
            <Route path="/role/:roleId">
              <Role />
            </Route>
            <Route path="/newRole">
              <NewRole />
            </Route>
            <Route path="/cars">
              <CarList />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
