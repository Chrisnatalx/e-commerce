import "./App.css";
import NavBar from "./components/Navbar/NavBar.jsx";
import ItemListContainer from "./components/itemListContainer/itemListContainer.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemDetailCountainer from "./components/itemListContainer/ItemDetailCountainer";
import { CartContextProvider } from "./CartContext";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CartContextProvider>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <ItemListContainer />
            </Route>
            <Route exact path="/category/:categoryId">
              <ItemListContainer />
            </Route>
            <Route exact path="/items/:itemId">
              <ItemDetailCountainer />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
          </Switch>
        </CartContextProvider>
      </div>
    </BrowserRouter>
  );
}
export default App;
