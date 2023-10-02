import { type Country } from '../types.d'

interface Props {
  countries: Country[]
}

export function CountriesList ({ countries }: Props): JSX.Element {
  return (
    <ul>
      {countries.map((country, index) => (
        <li key={index}>{country.name.common}</li>
      ))}
    </ul>
  )
}
