import './styles/App.css';
import Nav from './components/Nav'
import Search from './components/Search'
import Filter from './components/Filter'
import Cards from './components/Cards'

function App() {
  return (
    <div className="App">
      <Nav />
      <Search />
      <Filter />
      <Cards />
    </div>
  );
}

export default App;
