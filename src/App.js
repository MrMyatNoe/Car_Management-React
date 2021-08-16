import Topbar from "./components//topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from './pages/home/Home';
import { HashRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './App.css';
import Role from "./pages/role/Role";

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
              <Role />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
