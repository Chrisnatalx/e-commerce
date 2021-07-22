import './App.css';
import NavBar from './components/Navbar/NavBar.jsx';
import ItemListContainer from './components/itemListContainer/itemListContainer.js';
import ItemCount from './components/ItemCount.jsx/ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';

const handleCount =(cant)=>{
  alert( 'agregaste: '+ cant);
}

function App() {
  return (
    <div className="App" style={{backgroundColor: 'lightBlue'}}>
      <NavBar/>
      <ItemListContainer greeting="Este es mi e-commerce"/>
      <ItemCount stock={5} initial={1} onAdd={handleCount}/>
    </div>
  );
}
export default App;