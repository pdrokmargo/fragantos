import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <NavBar />
         <ItemListContainer greeting='Saludos a CLase 34775 React.js!' />
      </header>
    </div>
  );
}

export default App;
