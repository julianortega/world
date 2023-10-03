import { useState } from 'react'
import { options } from '../data/languages'
import '../styles/Header.css'

type Props = {
  onLangSelect: (lang: string) => void
}

const Header: React.FC<Props> = ({ onLangSelect }) => {
  const [lang, setLang] = useState('')

  const handleLangSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value
    setLang(selectedLang)
    onLangSelect(selectedLang)
  }

  return (
    <header>
      <h1>World 🌎</h1>
      <select value={lang} onChange={handleLangSelect}>
        <option value="A">Select language</option>
        {options.map(option => {
          return (
            <option key={option.value} value={option.label}>
              {option.label}
            </option>
          )
        })}
      </select>
    </header>
  )
}

export default Header
