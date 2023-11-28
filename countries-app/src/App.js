import './styles/App.css';
import Nav from './components/Nav'
import Search from './components/Search'
import Filter from './components/Filter'

function App() {
  return (
    <div className="App">
      <Nav />
      <Search />
      <Filter />
    </div>
  );
}

export default App;
