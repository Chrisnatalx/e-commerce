import './App.css';
import NavBar from './components/Navbar/NavBar.jsx';
import ItemListContainer from './components/itemListContainer/itemListContainer.js';
import ItemCount from './components/ItemCount.jsx/ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailCountainer from './components/itemListContainer/ItemDetailCountainer';

const handleCount =(cant)=>{
  alert( 'agregaste: '+ cant);
}


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Este es mi e-commerce"/>
      <ItemCount stock={5} initial={1} onAdd={handleCount}/>
      <ItemDetailCountainer/>
    </div>
  );
}
export default App;