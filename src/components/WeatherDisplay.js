import React from 'react'
import Atmosphere from './Atmosphere'
import Temperature from './Temperature'
import WeatherDescription from './WeatherDescription'

function WeatherDisplay (props) {
  const { temp, unit, main, description, pressure, humidity, temp_min, temp_max } = props
  return (
    <div className='weather-display'>
      <Temperature
        temp={temp}
        unit={unit}
        min={temp_min}
        max={temp_max}
      />
      <div className='description'>
        <WeatherDescription
          title={main}
          description={description}
        />
        <Atmosphere
          pressure={pressure}
          humidity={humidity}
        />
      </div>
    </div>
  )
}

export default WeatherDisplay
