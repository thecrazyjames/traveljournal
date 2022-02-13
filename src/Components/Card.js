import React from 'react'

function Card(props) {
  return (
    <div className="Card">

        <div className="PhotoArea">
        <img className="Nicephoto" src={process.env.PUBLIC_URL + "/irelandMountain.jpeg"} alt={props.title}></img>
        </div>
        <div className="text">
        <h3>
            <span class="material-icons">location_on</span>
            <span className="country" > {props.location}</span>
            <a href={props.googleMapsUrl}>View on Google Maps</a>
        
        </h3>
        <h1>
            {props.title}
        </h1>
        <h5>
            {props.startDate} - {props.endDate}
        </h5>
        <p>
            {props.description}
        </p>
        </div>


    </div>
  );
}

export default Card;