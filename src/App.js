import './App.css';
import NavBar from './components/Navbar/NavBar.jsx';
import ItemListContainer from './components/itemListContainer/itemListContainer.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailCountainer from './components/itemListContainer/ItemDetailCountainer';
import { Navbar } from 'react-bootstrap';




function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <Navbar/>
          </Route>
          <Route exact path="/category/:catId">
            <ItemListContainer greeting="Este es mi e-commerce"/>
          </Route>
          <Route>
            <ItemDetailCountainer/>
          </Route>
        </Switch>
        </div>
    </BrowserRouter>  
  );
}
export default App;