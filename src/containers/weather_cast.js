import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';

class WeatherCast extends Component{

    renderWeather(cityData){

        const name = cityData.city.name;
        const temp = cityData.list.map(data => data.main.temp);
        const humidity = cityData.list.map(data => data.main.humidity);
        const pressure = cityData.list.map(data => data.main.pressure);
        return( 
            <tr key={name}>
                <td>{name}</td>
                <td>
                    <Chart data={temp} color='red' />
                </td>
                <td>
                    <Chart data={humidity} color='green' />
                </td>
                <td>
                    <Chart data={pressure} color='black' />
                </td>
            </tr>
        );
    }

    render(){
        return(
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Temperature (K)</th>
                            <th>Humidity (%)</th>
                            <th>Pressure (hPa)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.weather.map(this.renderWeather)}
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        weather: state.weather
    }
}

export default connect(mapStateToProps)(WeatherCast);