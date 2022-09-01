import React from "react";
import loc from '../src/loc.png'

export function Card(props){
    return(
        <div className="card">
            <img src= {`../src/${props.data.imageUrl}`} />
            <section className="cardContent">
            <div className="firstDiv">
            <p className="country"><img src= {loc} className = "loc"/> {props.data.location}</p>
            <a href= {props.data.googleMapsUrl} >View on Google Maps</a>
            </div>

            <div>
            <p className="location">{props.data.title}</p>
            <p className="date">{props.data.startDate} - {props.data.endDate}</p>
            <p className="description">{props.data.description}</p>
            </div>
            </section>
        </div>
    )
}