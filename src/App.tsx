import { useEffect, useState } from 'react'
import './App.css'
import { CountriesList } from './components/CountriesList'
import { type Country, type WorldData } from './types.d'
import WorldMap from 'react-svg-worldmap'

export const App: React.FC = () => {
  const [countries, setCountries] = useState([])
  const [world, setWorld] = useState<WorldData[]>([])

  const param = 'all'

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/${param}`)
      .then(async res => await res.json())
      .then(data => {
        setCountries(data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    setWorld(countries.map((c: Country) => ({
      country: c.cca2.toLowerCase(),
      value: c.population
    }))
    )
  }
  , [countries])
  console.log(world)
  return (
    <div className="App">
      <h1>World 🌎</h1>
      <WorldMap
        color="blue"
        title="Spanish speaking Countries"
        value-suffix="people"
        size="xl"
        data={world}
      />
      <CountriesList countries={countries} />
    </div>
  )
}
