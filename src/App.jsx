import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/Container/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting= 'Hola soy ItemListContainer' />
    </div>
  );
}

export default App;
