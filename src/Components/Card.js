import React from 'react'

function Card(props) {
  return (
    <div className="Card">

        <div className="DestinationPhoto">
        <img src="https://unsplash.com/photos/WLxQvbMyfas" alt="Mount Fuji"></img>
        </div>
        <div className="text">
        <h3>
            <span class="material-icons">location_on</span>
            <span className="country" > {props.country} Test Text </span>
            <a href={props.googlelink}>View on Google Maps</a>
        
        </h3>
        <h1>
            Location Name {props.location}
        </h1>
        <h5>
            12 Jan, 2021 - 24 Jan, 2021 {props.dates}
        </h5>
        <p>
            Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foegin tourists. {props.description}
        </p>
        </div>


    </div>
  );
}

export default Card;