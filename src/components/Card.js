import React from "react";

export default function Card(props){
    return (
        <div className="card">
            <img className="card--img" src={props.imageUrl} alt=""></img>
            <div className="card--info">
                <div className="card--location">
                    <img src="./images/gps.jpg" alt="" className="gps-icon"></img>
                    <span className="card--country">{props.location}</span>
                    <a href={props.googleMapsUrl} target="_blank" rel="noreferrer"><span className="card--maplink">View on Google Maps</span></a>
                </div>
                <p className="card--title">{props.title}</p>
                <p className="card--dates">{props.startDate} - {props.endDate}</p>
                <p className="card--description">{props.description}</p>
            </div>
        </div>
    )
}