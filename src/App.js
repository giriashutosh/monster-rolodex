import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/search_box";

function App() {
  const [monster_info, setMonster_Info] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monster_info);
  

  const filterMonster = (event) => {
    setSearchField(event.target.value.toLocaleLowerCase());
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonster_Info(users));

  
  }, []);

  useEffect((()=>{
    const newfilteredMonsters = monster_info.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  });
  setFilteredMonsters(newfilteredMonsters)
  }),[monster_info, searchField])

  return (
    <div className="App">
     <h1 className="app-title">Monsters Dashboard</h1>
      <SearchBox
        className={"monsters-search-box"}
        onChangeHandler={filterMonster}
        placeholder={"search monster"}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
