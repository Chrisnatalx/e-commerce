import './App.css';
import NavBar from './components/Navbar/NavBar.jsx';
import ItemListContainer from './components/itemListContainer/itemListContainer.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailCountainer from './components/itemListContainer/ItemDetailCountainer';




function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Este es mi e-commerce"/>
      
      <ItemDetailCountainer/>
    </div>
  );
}
export default App;