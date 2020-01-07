var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function() {
        return {
            isLoading: false
        }
    },
    handleSearch: function(location){
        var that = this;
        debugger;
        this.setState({isLoading: true});

        openWeatherMap.getTemp(location).then(function (temperature){
            that.setState({
                location: location,
                temperature: temperature,
                isLoading: false
            });
        }, function(errorMessage){
            alert(errorMessage);
            that.setState({isLoading: false});
        });
    },
    render: function(){
        var {isLoading, location, temperature} = this.state;

        function renderMessage(){
            if(isLoading){
                return <h3>Fetching weather...</h3>;
            } else if (temperature && location) {
                return <WeatherMessage temperature={temperature} location={location}/>;
            }
        }

        return(
            <div>
                <h3>Weather Component</h3>

                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;