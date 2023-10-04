import { useEffect, useState } from 'react'
import './styles/App.css'
import { CountriesList } from './components/CountriesList'
import { type Country, type WorldData } from './types.d'
import WorldMap from 'react-svg-worldmap'
import Header from './components/Header'
import { Pagination } from './components/Pagination'

export const App: React.FC = () => {
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [world, setWorld] = useState<WorldData[]>([])
  const [lang, setLang] = useState('')
  const [page, setPage] = useState(1)
  const pageSize = 10

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name,capital,region,flags,cca2,population,languages')
      .then(async res => await res.json())
      .then(data => {
        setCountries(data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  useEffect(() => {
    const filteredCountries = lang ? countries.filter((c: Country) => c.languages[lang]) : countries
    setFilteredCountries(filteredCountries)
  }, [lang, countries])

  useEffect(() => {
    setWorld(filteredCountries.map((c: Country) => ({
      country: c.cca2.toLowerCase(),
      value: c.population
    })))
  }, [filteredCountries, countries])

  const handlePageChange = (newPage: number) => {
    setPage(newPage)
  }

  const pageCount = Math.ceil(filteredCountries.length / pageSize)

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
      <CountriesList 
        countries={filteredCountries} 
        page={page} 
        pageSize={pageSize} 
      />
      <Pagination 
        page={page} 
        pageCount={pageCount} 
        onPageChange={handlePageChange} 
      />
    </div>
  )
}