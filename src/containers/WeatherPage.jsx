import React, { Component } from 'react'
//Components
import WeatherCard from '../components/WeatherCard'
//Styles
import '../assets/styles/container/WeatherPage.css'
class WeatherPage extends React.Component{
    render(){
        return(
            <>
            <div className="Page_Container">
                <WeatherCard />
                <WeatherCard />
                
            </div>
            </>
        )
    }
}
export default WeatherPage;