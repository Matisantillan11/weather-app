import React, { Component } from 'react'

import {WiDaySunny} from 'weather-icons-react' 

//Styles 
import '../assets/styles/components/WeatherCard.css'
class WeatherCard extends Component{
    state={
        loading:true,
        error: false,
        API_KEY: '0624b8899032b15312fe75824ca56902',
        data: {
            weather:[],
            main:{},
           
        }
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async () =>{
        this.setState({loading: true})
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Cordoba&appid=${this.state.API_KEY}`)
        const data = await response.json()
        console.log(data)
       if (data.error){
            this.setState({
                loading: false,
                error: true,
                errorMessage: 'No info avaible'
            }) 
        } else { 
            this.setState({
                loading: false,
                error: false,
                data: data
            })
        
        }}
    render(){
        return(
            <>
                 
                 {this.state.loading && <p className="center">Loading...</p>}
                {this.state.error && <p className="center">Error: {this.state.errorMessage}</p>}
                {this.state.data.weather.map((data) =>{
                    return(
                    <div key={data.id} className="weatherCard">
                        <div className="nav">
                            <div className="menu_container">
                                <i className="burger"></i>
                                <i className="burger"></i>
                                <i className="burger"></i>
                            </div>
                            <div className="infoContainer">
                                <p className="current_city">{this.state.data.name}</p>
                                <p className="current_info">Tue, 15.45pm</p>
                            </div>
                            <div className="menu_container">
                                <i className="burger"></i>
                                <i className="burger"></i>
                                <i className="burger"></i>
                            </div>
                        </div>
                        <div className="weatherCard_hero">
                            <div className="weatherState_container">
                                <WiDaySunny size="90" color="#fbfbfb"/>
                                <p className="weatherState">{data.main}</p>
                            </div>
                        
                            <div className="weatherTemps_container">
                                <p className="current-temperature">{ Math.floor(this.state.data.main.temp-273.15)
                                }°</p>
                                <div className="temperature_range">
                                    <p className="max-temperature">{Math.floor(this.state.data.main.temp_max-273.15)}°</p>
                                    <hr/>
                                    <p className="min-temperature">{Math.floor(this.state.data.main.temp_min-273.15)}°</p>
                                </div>
                            </div>
                        </div>
                    </div>)
                })}
            </>
        )
    }
}

export default WeatherCard;