import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Patient from "./components/Patient";
import PatientDetail from "./components/PatientDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <NavLink activeClassName="active" exact to="/">
              Patients
            </NavLink>
            <NavLink
              activeClassName="active"
              className="patient-detail-link"
              to="/patient/"
            >
              Patients Detail
            </NavLink>
          </nav>
          <Switch>
            <Route path="/" exact component={Patient} />
            <Route path="/patient/:patient_id" component={PatientDetail} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
