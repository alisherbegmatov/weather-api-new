import React from 'react'

function Atmosphere (props) {
  const { pressure, humidity } = props
  return (
    <div>
      <div>Humidity: {humidity}</div>
      <div>Pressure: {pressure}</div>
    </div>
  )
}

export default Atmosphere
