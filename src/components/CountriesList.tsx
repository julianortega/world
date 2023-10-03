import { type Country } from '../types.d'
import '../styles/CountriesList.css'

interface Props {
  countries: Country[]
}

export function CountriesList ({ countries }: Props): JSX.Element {
  return (
    <div className="countries-list">
      {countries.map((country, index) => (
        <a className="country" key={index} href={`https://en.wikipedia.org/wiki/${country.name.common}`}>
          <img className="flag" src={country.flags.png} alt={country.name.common} />
          <h3 className="country__name">{country.name.common}</h3>
          <p className="country__capital"><strong>Capital:</strong> {country.capital}</p>
          <p className="country__region"><strong>Region:</strong> {country.region}</p>
          <p className="country__population"><strong>Population:</strong> {country.population}</p>
        </a>
      ))}
    </div>
  )
}
