import Header from "./components/Header";
import "./styles/config.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/items/:id" exact component={ProductDetail} />
            <Route path="/items" exact component={Search} />
            <Route path="*" component={NotFound} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
