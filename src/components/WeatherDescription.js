import React from 'react'

function WeatherDescription (props) {
  const { description, title } = props
  return (
    <div className='weather-description'>
      <div>Title: {title}</div>
      <div>Description: {description}</div>
    </div>
  )
}

export default WeatherDescription
