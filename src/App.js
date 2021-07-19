import './App.css';
import NavBar from './components/Navbar/NavBar.jsx';
import itemListContainer from './components/itemListContainer/itemListContainer.js';


function App() {
  return (
    <div className="App" style={{backgroundColor: 'lightBlue'}}>
      <NavBar/>
      <itemListContainer greeting="Este es mi e-commerce"/>
    </div>
  );
}
export default App;