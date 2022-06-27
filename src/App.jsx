import Header from "./components/Header";
import "./styles/config.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import List from "./pages/List";
import Search from "./pages/Search";
import ProductsProvider from "./context/productsContext";

function App() {
  return (
    <div className="App">
      <ProductsProvider>
        <Router>
          <Header />
          <main>
            <Switch>
              <Route path="/items/:id" exact component={List} />
              <Route path="/items" exact component={Search} />
              <Route path="/not-found" />
              <Route path="/" component={List} />
            </Switch>
          </main>
        </Router>
      </ProductsProvider>
    </div>
  );
}

export default App;
