
var React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var ErrorModal = require('ErrorModal');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function() {
        return {
            isLoading: false

        }
    },
    handleSearch: function(location){
        var that = this;

        this.setState({
            isLoading: true,
            errorMessage: undefined
        });

        openWeatherMap.getTemp(location).then(function (temperature){
            that.setState({
                location: location,
                temperature: temperature,
                isLoading: false
            });
        }, function(e){
            that.setState({
                isLoading: false,
                errorMessage: e.message
            });
        });
    },
    render: function(){
        var {isLoading, location, temperature, errorMessage} = this.state;

        function renderMessage(){
            if(isLoading){
                return <h3 className="text-center">Fetching weather...</h3>;
            } else if (temperature && location) {
                return <WeatherMessage temperature={temperature} location={location}/>;
            }
        }

        function renderError(){
            if(typeof errorMessage === 'string') {
                return (
                    <ErrorModal message = {errorMessage}/>
                )
            }
        }

        return(
            <div>
                <h1 className="text-center page-title">Get Weather</h1>

                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
});

module.exports = Weather;