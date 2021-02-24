import React, { Component } from 'react'



class HourlyForecastCard extends Component {
    render(){
        return(
            <>
                <div>
                    {this.props.list.slice(0,6).map(data =>{
                        return(
                            <>
                                <div key = {data.weather.id}>
                                    <p>fecha</p>
                                    <img src={`http://openweathermap.org/img/w/${data.weather.icon}.png`} alt=""/>
                                    <div>
                                        <p>{data.main.temp_max}</p>
                                        <p>min temp</p>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </>
        )
    }
}

export default HourlyForecastCard;