import React, { Component } from 'react'
//Components
import WeatherCard from '../components/WeatherCard'
//Styles
import '../assets/styles/container/WeatherPage.css'
import CardDetails from '../components/CardDetails';
class WeatherPage extends React.Component{
    state={
        loading:true,
        error: false,
        API_KEY: '0624b8899032b15312fe75824ca56902',
        data: {
            weather:[],
            main:{},
            wind:{},
            clouds:{},
            sys:{}
           
        }
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async () =>{
        this.setState({loading: true})
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Cordoba&units=metric&appid=${this.state.API_KEY}&lang=es`)
        const data = await response.json()
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
        
        }
        
    }
    

    render(){
        return(
            <>
            
            <div className="Page_Container">
                {this.state.loading && <p className="center">Loading...</p>}
                {this.state.error && <p className="center">Error: {this.state.errorMessage}</p>}
                <WeatherCard 
                data={this.state.data}
                /> 
               <CardDetails 
               main={this.state.data.main}
               wind={this.state.data.wind}
               clouds={this.state.data.clouds}
               sys={this.state.data.sys}/>
                
            </div>
            </>
        )
    }
}
export default WeatherPage;