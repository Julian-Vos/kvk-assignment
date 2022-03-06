import { useState, useEffect } from 'react'
import './App.css'
import Result from './Result'

function App() {
  const [query, setQuery] = useState('')
  const [companies, setCompanies] = useState([])

  useEffect(() => {
    fetch(`https://617c09aad842cf001711c200.mockapi.io/v1/companies?search=${query}`)
      .then((response) => response.json())
      .then((json) => setCompanies(json.data))
      .catch((error) => alert(error))
  }, [query])

  return (
    <>
      <header>
        <h1>Kompany</h1>
      </header>

      <main>
        <section id='search-bar'>
          <input value={query} onChange={(event) => setQuery(event.target.value)} />
          <button>Search</button>
        </section>

        <section id='results'>
          {companies.map((company, index) => (
            <Result company={company} key={index} />
          ))}
        </section>
      </main>
    </>
  )
}

export default App
