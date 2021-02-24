import React, { Component } from 'react'

import HourlyForecast from './HourlyForecast'

//Styles 
import '../assets/styles/components/WeatherCard.css'
class WeatherCard extends Component{
    
    render(){
        return(
            <>
                
                {this.props.data.weather.map((data) =>{
                    return(
                        <div key={data.id} className="weatherCard">
                            <div className="nav">
                                <div className="menu_container">
                                    <i className="burger"></i>
                                    <i className="burger"></i>
                                    <i className="burger"></i>
                                </div>
                                <div className="infoContainer">
                                    <p className="current_city">{this.props.data.name}</p>
                                    <p className="current_info">Tue, 15.45pm</p>
                                </div>
                                <div className="plus_container">
                                    <i className="plus"></i>
                                    <i className="plus"></i>
                                </div>
                            </div>
                            <div className="weatherCard_hero">
                                <div className="weatherState_container">
                                    <img className="weatherState_img"
                                    src={`http://openweathermap.org/img/w/${data.icon}.png`} 
                                    alt={data.description}/>
                                    <p className="weatherState">{data.main}</p>
                                </div>
                            
                                <div className="weatherTemps_container">
                                    <p className="current-temperature">{ Math.floor(this.props.data.main.temp)}°</p>
                                    <div className="temperature_range">
                                        <p className="max-temperature">{Math.floor(this.props.data.main.temp_max)}°</p>
                                        <hr/>
                                        <p className="min-temperature">{Math.floor(this.props.data.main.temp_min)}°</p>
                                    </div>
                                </div>
                            </div>
                            <HourlyForecast />
                        </div>
                    )
                })}
            </>
        )
    }
}

export default WeatherCard;