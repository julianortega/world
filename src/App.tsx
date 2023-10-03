import { useEffect, useState } from 'react'
import './styles/App.css'
import { CountriesList } from './components/CountriesList'
import { type Country, type WorldData } from './types.d'
import WorldMap from 'react-svg-worldmap'
import Header from './components/Header'
import { Pagination } from './components/Pagination'

export const App: React.FC = () => {
  const [countries, setCountries] = useState([])
  const [world, setWorld] = useState<WorldData[]>([])
  const [lang, setLang] = useState('')
  const [page, setPage] = useState(1)
  const pageSize = 10

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

  const handlePageChange = (newPage: number) => {
    setPage(newPage)
  }

  const handlePrevPage = () => {
    setPage(page - 1)
  }

  const handleNextPage = () => {
    setPage(page + 1)
  }

  const pageCount = Math.ceil(countries.length / pageSize)

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
      <CountriesList countries={countries} page={page} pageSize={pageSize} />
      <Pagination page={page} pageCount={pageCount} onPageChange={handlePageChange} />
    </div>
  )
}