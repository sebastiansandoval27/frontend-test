import { createContext } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import "./styles/config.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import List from "./pages/List";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div
          style={{
            marginTop: "100px",
          }}
        >
          <Switch>
            <Route path="/items/:id" exact component={List} />
            <Route path="/items" exact component={Search} />
            <Route path="/not-found" />
            <Route path="/" component={List} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
