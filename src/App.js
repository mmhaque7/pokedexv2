import "./App.css";
import Dashboard from "./components/Layout/Dashboard";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Layout/Navbar";
import Pokemon from "./components/Pokemon/Pokemon";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route
            exact
            path="/pokemon/:pokemonIndex"
            render={() => <Pokemon />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
