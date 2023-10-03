import { useEffect, useState } from 'react'
import './styles/App.css'
import { CountriesList } from './components/CountriesList'
import { type Country, type WorldData } from './types.d'
import WorldMap from 'react-svg-worldmap'
import Header from './components/Header'

export const App: React.FC = () => {
  const [countries, setCountries] = useState([])
  const [world, setWorld] = useState<WorldData[]>([])
  const [lang, setLang] = useState('')

  const param = lang ? `lang/${lang}` : 'all'

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/${param}?fields=name,capital,region,flags,cca2,population`)
      .then(async res => await res.json())
      .then(data => {
        setCountries(data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [param])

  useEffect(() => {
    setWorld(countries.map((c: Country) => ({
      country: c.cca2.toLowerCase(),
      value: c.population
    })))
  }, [countries])
  
  return (
    <div className="App">
      <Header
        onLangSelect={setLang}
      />
      <WorldMap
        color="blue"
        title="Spanish speaking Countries"
        value-suffix="people"
        size="responsive"
        data={world}
      />
      <CountriesList countries={countries} />
    </div>
  )
}