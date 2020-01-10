var React = require('react');

var WeatherMessage = ({temperature, location}) => {

    return (
       <h3 className="text-center">The actual temperature for {location} is: {temperature} celsius</h3>
    )
};

module.exports = WeatherMessage;