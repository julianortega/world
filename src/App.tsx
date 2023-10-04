import { useEffect, useMemo, useState } from 'react'
import './styles/App.css'
import { CountriesList } from './components/CountriesList'
import { type Country, type WorldData } from './types.d'
import WorldMap from 'react-svg-worldmap'
import Header from './components/Header'
import { Pagination } from './components/Pagination'
import axios from 'axios'
import Filters from './components/Filters'

export const App: React.FC = () => {
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [world, setWorld] = useState<WorldData[]>([])
  const [lang, setLang] = useState('')
  const [sort, setSort] = useState('population')
  const [page, setPage] = useState(1)
  const pageSize = 10

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,capital,region,flags,cca2,population,languages')
        setCountries(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  useMemo(() => {
    const filteredCountries = lang ? countries.filter((c: Country) => c.languages[lang]) : countries
    if (sort === 'population') {
      filteredCountries.sort((a: Country, b: Country) => b.population - a.population)
    } else if (sort === 'name') {
      filteredCountries.sort((a: Country, b: Country) => a.name.common.localeCompare(b.name.common))
    }
    setFilteredCountries(filteredCountries)
  }, [lang, countries, sort])

  useEffect(() => {
    setWorld(filteredCountries.map((c: Country) => ({
      country: c.cca2.toLowerCase(),
      value: c.population
    })))
  }, [filteredCountries])

  useEffect(() => {
    setPage(1)
  }, [lang])

  const handlePageChange = (newPage: number) => {
    setPage(newPage)
  }

  const pageCount = Math.ceil(filteredCountries.length / pageSize)

  return (
    <div className="App">
      <Header
      />
      <Filters 
        onLangSelect={setLang}
        onSortChange={setSort}
      />
      <WorldMap
        size="responsive"
        data={world}
        frame={false}
        backgroundColor="transparent"
        borderColor='white'
        color='#FCA311'
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