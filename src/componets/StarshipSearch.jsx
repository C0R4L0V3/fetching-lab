import { useState } from "react"
import React from "react"

//As a user, I should see a search bar above the list of starships. I should be able to enter in the name of a starship into the search bar, and submit my query.

// As a user, when I submit a search, the starship results being displayed should update based on my query

const StarshipSearch = ({ searchQuery, setSearchQuery, setStarships}) => {

// const baseURL = 'https://swapi.dev/api/'

    const handleChange = (e) => {
        setSearchQuery(e.target.value)
    }

//I thought i needed to manuall search button

// const handleSubmit = async (e) => {
//     e.preventDefault() // prevent form submitting and refreshing page
//     try{
//         let res = await fetch(
//             `${baseURL}starships` 
//         );
//         let JSONdata = await res.json()
//         setStarships(JSONdata.results)
//         console.log(JSONdata.results);        
//     } catch (err) {
//         console.error('Error fetching data', err);
//     }
//     setSearchQuery('')
// }

     return (
        <div className="serach">
            <h2>Search</h2>
            <form >  {/* onSubmit={handle submit*/}
                <label htmlFor="search"> Search Keyword </label>
                <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={handleChange}/>
                {/* <button type="submit">Search</button> */}
            </form>
        </div>
     )
}

export default StarshipSearch