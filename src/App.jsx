import { useState, useEffect } from "react";
import StarshipSearch from "./componets/StarshipSearch.jsx";
import StarshipList from "./componets/StarshipList.jsx";


const App = () => {

const [starships, setStarships] = useState([]) // an empty array for holding starship data
const [searchQuery, setSearchQuery] = useState('') // an empty string for the search

const baseURL = 'https://swapi.dev/api/'

//useeffct to tigger side effect api fetch on load
useEffect (() => {
  const fetchShips = async () => {
    try {
      let res = await fetch( `${baseURL}starships` );
    let JSONdata = await res.json()
    setStarships(JSONdata.results)
    console.log(JSONdata.results);   
      
    } catch (error) {
      console.console.error('Error fetching ships', error);
      
    }
  };
  fetchShips()
}, []);


  return (
    <div className="App">
      <h1>StarWars Api</h1>
      <div>
        <StarshipSearch 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        setStarships={setStarships} 
        baseURL={baseURL}
        /> {/* passing down the state and set state*/}
      </div>
      <div>
        <StarshipList 
        starships={starships} 
        searchQuery={searchQuery}
        /> {/* pass down the array and the search state */}
      </div>
    </div>
  )
};

export default App