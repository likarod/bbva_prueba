const getDetailedForecast = data => [
    {
        name: 'humidity',
        value: data.humidity,
        unit: '%'
    },
    {
        name: 'temp min',
        value: Math.round(data.temp_min),
        unit: 'ºC'
    },
    {
        name: 'temp max',
        value: Math.round(data.temp_max),
        unit: 'ºC'
    }
]

export default getDetailedForecast;