import React from 'react'

function convertTemp (temp, unit) {
  if (unit === 'imperial') {
    return (temp * 9 / 5 - 459.67).toFixed(1) + '°F'
  } else if (unit === 'metric') {
    return (temp - 273.15).toFixed(1) + '°C'
  }
  return temp + unit
}

function Temperature (props) {
  const { temp, unit, min, max } = props
  return (
    <div>
      <div className='temp'>
        <h4>Current Temperature: {convertTemp(temp, unit)}</h4>
      </div>
      <div className='high-low'>
        <p>Low: {convertTemp(min, unit)}</p>
        <p>High: {convertTemp(max, unit)}</p>
      </div>
    </div>
  )
}

export default Temperature
