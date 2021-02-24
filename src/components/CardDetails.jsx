import React, { Component } from 'react'

import {WiDaySunny} from 'weather-icons-react'
//styles
import '../assets/styles/components/CardDetails.css'
import HourlyForecast from './HourlyForecast'

class CardDetails extends Component{
    /* secondsToString = (seconds) => {
        var hour = Math.floor(seconds / 3600) % 60;
        hour = (hour < 10)? '0' + hour : hour;
        var minute = Math.floor((seconds / 60) % 60);
        minute = (minute < 10)? '0' + minute : minute;
        var second = seconds % 60;
        second = (second < 10)? '0' + second : second;
        return hour + ':' + minute + ':' + second;
    } */

    render(){
        return(
            <div  className="weatherCard">
                <div className="cardDetails_textContainer">
                    <h4 className="cardDetails_title">DETAILS</h4>
                    <i className="line"></i>
                </div>
                <section className="details">
                    <div className="card">
                        <WiDaySunny size="50"/>
                        <p className ="card_text">Feels Like</p>
                        <p className ="card_text">{Math.floor(this.props.main.feels_like)}°</p>
                    </div>
                    <div className="card">
                        <WiDaySunny size="50"/>
                        <p className ="card_text">Humidity</p>
                        <p className ="card_text">{this.props.main.humidity}%</p>
                    </div>
                    <div className="card">
                        <WiDaySunny size="50"/>
                        <p className ="card_text">Wind</p>
                        <p className ="card_text">{this.props.wind.speed} Km/h</p>
                    </div>
                    <div className="card">
                        <WiDaySunny size="50"/>
                        <p className ="card_text">Sky Covered</p>
                        <p className ="card_text">{this.props.clouds.all}%</p>
                    </div>
                    <div className="card">
                        <WiDaySunny size="50"/>
                        <p className ="card_text">Sunrise</p>
                        <p className ="card_text">{this.props.sys.sunrise} am</p>
                    </div>
                    <div className="card">
                        <WiDaySunny size="50"/>
                        <p className ="card_text">Sunset</p>
                        <p className ="card_text">{this.props.sys.sunset} pm</p>
                    </div>
                </section>
                <div className="cardDetails_textContainer">
                    <h4 className="cardDetails_title">Details</h4>
                    <i className="line"></i>
                </div>
                
                
                <section className="details">
                    <HourlyForecast />
                </section>
                
            </div>
        )
    }
}

export default CardDetails;