import React, { Component } from 'react'
import WeatherDisplay from './WeatherDisplay'

class Weather extends Component {
  constructor (props) {
    super(props)

    this.state = {
      inputValue: '94901',
      weatherData: null,
      unit: 'imperial',
      status: 'idle'
    }
  }

  handleSubmit (e) {
    const { inputValue } = this.state
    e.preventDefault()
    const apikey = '022716d25b2c9f7f164cfb5594767d22'
    const zip = inputValue
    const units = 'imperial'
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${apikey}`
    fetch(url).then(res => {
      this.setState({ status: 'loading' })
      return res.json()
    }).then((json) => {
      this.setState({ weatherData: json })
      this.setState({ status: 'success' })
    }).catch((err) => {
      this.setState({ weatherData: null })
      console.log('-- Error fetching --')
      console.log(err.message)
    })
  }

  renderWeather () {
    const { weatherData, unit } = this.state
    if (weatherData === null) {
      return undefined
    } else if (weatherData.cod !== 200) {
      return <p>{weatherData.message}</p>
    }

    console.log(weatherData)
    const { main, description } = weatherData.weather[0]
    const { temp, pressure, humidity, temp_min, temp_max } = weatherData.main

    return (
      <div>
        <WeatherDisplay
          main={main}
          description={description}
          temp={temp}
          temp_min={temp_min}
          temp_max={temp_max}
          pressure={pressure}
          humidity={humidity}
          unit={unit}
        />
      </div>
    )
  }

  render () {
    const { inputValue } = this.state
    return (
      <div className='App'>

        {
          }
        <form className='input-form' onSubmit={e => this.handleSubmit(e)}>

          {
            }
          <h3>ENTER ZIP CODE: </h3>
          <input
            className='input-box'
            value={inputValue}
            onChange={e => this.setState({ inputValue: e.target.value })}
            type='text'
            pattern='(\d{5}([\-]\d{4})?)'
            placeholder='enter zip'
          />
          <div className='unit-input'>
            <input
              type='radio'
              id='imperial'
              name='unit'
              value='imperial'
              onChange={e => this.setState({ unit: 'imperial' })}
            />
            <label for='imperial'>IMPERIAL</label><br />
            <input
              type='radio'
              id='metric'
              name='unit'
              value='metric'
              onChange={e => this.setState({ unit: 'metric' })}
            />
            <label for='metric'>METRIC</label><br />
          </div>
          <button className='zip-button' type='submit'>SUBMIT</button>
        </form>
        {
          }
        {this.renderWeather()}
      </div>
    )
  }
}

export default Weather
