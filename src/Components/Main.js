import React from 'react'
import Card from './Card'
import data from '../data'



function Main() {
  console.log(data);
  const carditem = data.map(item => 
    <Card
    imgUrl = {item.imgUrl} 
    title = {item.title} 
    googleMapsUrl = {item.googleMapsUrl}
    startDate = {item.startDate} 
    endDate = {item.startDate}
    description = {item.description}
    location = {item.location} />
  )

  return (
    <div className="Main">
      
      {carditem}

    </div>
  );
}

export default Main;