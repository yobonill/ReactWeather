var React = require('react');

var WeatherMessage = ({temperature, location}) => {

    return (
       <h1>The actual temperature for {location} is: {temperature} celsius</h1>
    )
};

module.exports = WeatherMessage;