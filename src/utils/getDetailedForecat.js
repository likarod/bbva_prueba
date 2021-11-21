const getDetailedForecast = data => [
    {
        name: 'Humedad',
        value: data.main.humidity,
        unit: '%'
    },
    {
        name: 'Sensación termica',
        value: Math.round(data.main.feels_like),
        unit: 'ºC'
    },
    {
        name: 'Temp min',
        value: Math.round(data.main.temp_min),
        unit: 'ºC'
    },
    {
        name: 'Temp máx',
        value: Math.round(data.main.temp_max),
        unit: 'ºC'
    },
    {
        name: 'Presión',
        value: (data.main.pressure),
        unit: 'hPa'
    },
    {
        name: 'Velocidad viento',
        value: Math.round(data.wind.speed),
        unit: 'm/s'
    }

]

export default getDetailedForecast;