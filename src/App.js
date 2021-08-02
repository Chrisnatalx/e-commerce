import './App.css';
import NavBar from './components/Navbar/NavBar.jsx';
import ItemListContainer from './components/itemListContainer/itemListContainer.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailCountainer from './components/itemListContainer/ItemDetailCountainer';





function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <ItemListContainer/>
          </Route>
          <Route exact patch="/category/:categoryId">
            <ItemListContainer greeting="Este es mi e-commerce"/>
          </Route>
          <Route>
            <ItemDetailCountainer/>
          </Route >
        </Switch>
        </div>
    </BrowserRouter>  
  );
}
export default App;