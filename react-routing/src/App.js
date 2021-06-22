import { Route, Switch, Redirect } from "react-router-dom"
import './App.css';
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./Components/MainHeader";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div className="App">
      < MainHeader />
      <main>

        <Switch>
          < Route path="/" exact>
            < Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            < Welcome />
          </Route>

          <Route path="/products" exact>
            < Products />
          </Route>

          <Route path="/products/:productId">
            < ProductDetail />
          </Route>
        </Switch>

      </main>

    </div>
  );
}

export default App;


// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-details/<any-value> => Product Details Component