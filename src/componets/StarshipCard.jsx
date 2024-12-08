 import React from "react"
 
 const StarshipCard = ({ starship }) => {

    return (
        <div className='starshipCard'>
            <div>
                <h2>{starship.name}</h2>
                <p><strong>Class:</strong> {starship.starship_class}</p>
                <p><strong>Manufacturer:</strong> {starship.manufacturer}</p>
                <p><strong>Model:</strong> {starship.model}</p>
            </div>
        </div>
    )
 }

 export default StarshipCard