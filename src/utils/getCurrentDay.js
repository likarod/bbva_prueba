import moment from "moment";


const getCurrentDay = (data, name, temp) => ({
    weekday: moment(data.timezone).format('ddd'),
    location: name,
    temperature: Math.round(temp.temp),
    weatherIcon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
})


export default getCurrentDay;