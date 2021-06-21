import{ Route }from "react-router-dom"
import './App.css';
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";

function App() {
  return (
    <div className="App">
      <Route path="/welcome">
        < Welcome />
      </Route>

      <Route path="/products">
        < Products />
      </Route>
    </div>
  );
}

export default App;


// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component