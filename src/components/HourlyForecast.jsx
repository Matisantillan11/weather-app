import React from 'react'
import { Component } from 'react';

import HourlyForecastCard from './HourlyForecastCard';

  class HourlyForecast extends Component{


    state={
      loading:true,
      error: false,
      API_KEY: '0624b8899032b15312fe75824ca56902',
      data:{
        list: [{
          main:{
            temp_min:'',
            temp_max: ''
          },
          weather:[{id:''}],
          dt_text:{}
        }]
      }
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async () =>{
        this.setState({loading: true})
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=cordoba&units=metric&appid=${this.state.API_KEY}&lang=es`)
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
                list: data
            })
        
        }
        
    }

    render(){
        return(
          <>
            
                  <HourlyForecastCard list={this.state.data.list}/>
          </>
           
        )
    }
} 

export default HourlyForecast;