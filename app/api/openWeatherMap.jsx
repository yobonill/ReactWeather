var axios = require('axios');

//http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=imperial&appid=322cf31dc9f58099fac294da8eff1b7fs

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=322cf31dc9f58099fac294da8eff1b7f&units=imperial';

module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestURL).then(function (res) {
            if (res.data.cod && res.data.message){
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function(res){
            throw new Error(res.data.message);
        });
    }
}