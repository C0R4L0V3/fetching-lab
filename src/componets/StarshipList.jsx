import React from "react"
import StarshipCard from "./StarshipCard.jsx"

// As a user, I should see a list of starship cards when the site loads. The list should also indicate the number of results that are being displayed currently.

// As a user, I should see the name, starship class, starship manufacturer, and starship model rendered in each starship card.

const StarshipList = ({ starships, searchQuery }) => {

    // ship filitering
    const filterShips = starships.filter((starship) => {
        return  starship.name.toLowerCase().includes(searchQuery.toLowerCase())
    })
// console.log(starships);  

    return (
       
        <div>
            <h2>Starships</h2>
            {filterShips.length === 0 ? (
                <p> No matching Ships found.</p>
            ) : (
            <div>
                <p> Number of results: {filterShips.length} </p>
                {/* maps through array */}
            {filterShips.map((starship, idx) => (
                <StarshipCard key={idx} starship={starship}/>
            ))}
            </div>
        )}

        </div>
       
    )
}

export default StarshipList