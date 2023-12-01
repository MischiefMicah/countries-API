import './styles/App.css';
import Nav from './components/Nav'
import Search from './components/Search'
import Filter from './components/Filter'
import Cards from './components/Cards'
import { SearchContext } from './contexts/SearchContext'
import { useState } from 'react'


function App() {

  const [inputTxt, setInputTxt] = useState('')

  return (
    <div className="App">
      <Nav />
      <SearchContext.Provider value={{inputTxt, setInputTxt}}>
        <Search />
        <Filter />
        <Cards />
      </SearchContext.Provider>
    </div>
  );
}

export default App;
