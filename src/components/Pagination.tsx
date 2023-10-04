import React from 'react'
import '../styles/Pagination.css'

interface Props {
  page: number
  pageCount: number
  onPageChange: (newPage: number) => void
}

export const Pagination: React.FC<Props> = ({ page, pageCount, onPageChange }) => {
  const handlePrevPage = () => {
    onPageChange(page - 1)
  }

  const handleNextPage = () => {
    onPageChange(page + 1)
  }

  return (
    <div className="pagination">
      <button onClick={handlePrevPage} disabled={page === 1} className='previous-page'>
        Prev
      </button>
      <div className='select-page-div'>
      {Array.from({ length: pageCount }).map((_, i) => (
        <button className="select-page" key={i} onClick={() => onPageChange(i + 1)} disabled={page === i + 1}>
          {i + 1}
        </button>
      ))}
      </div>
      <button onClick={handleNextPage} disabled={page === pageCount} className='next-page'>
        Next
      </button>
    </div>
  )
}