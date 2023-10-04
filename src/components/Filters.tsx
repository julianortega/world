import { useState } from 'react'
import { options } from '../data/languages'
import '../styles/Filters.css'

type Props = {
  onLangSelect: (lang: string) => void
  onSortChange: (sort: string) => void
}

const Filters: React.FC<Props> = ({ onLangSelect, onSortChange }) => {
  const [langOption, setLangOption] = useState('')
  const [sortOption, setSortOption] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const handleLangSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value
    setLangOption(selectedLang)
    onLangSelect(selectedLang)
  }

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSort = e.target.value
    setSortOption(selectedSort)
    onSortChange(selectedSort)
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  }

  return (
    <div className="Filters">
      <div className='search-bar'>
        <input type="text" id="search" value={searchQuery} onChange={handleSearchChange} placeholder='Search a country' />
      </div>
      <div className='sort-filters'>
        <div>
          <label htmlFor="sort">Sort by:</label>
          <select id="sort" value={sortOption} onChange={handleSortChange}>
            <option value="population">Population</option>
            <option value="name">Name</option>
          </select>
        </div>

        <div>
          <label htmlFor="lang">Filter by language:</label>
          <select value={langOption} onChange={handleLangSelect}>
            <option value="">Select language</option>
            {options.map(option => {
              return (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              )
            })}
          </select>
        </div>
      </div>
    </div>
  )
}

export default Filters