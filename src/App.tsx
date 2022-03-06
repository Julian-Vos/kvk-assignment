import { useEffect, useState } from 'react'
import './App.css'
import Result from './Result'

function App() {
  useEffect(() => {
    fetch('https://617c09aad842cf001711c200.mockapi.io/v1/companies')
      .then((response) => response.json())
      .then((json) => setCompanies(json.data))
      .catch((error) => alert(error))
  }, [])

  const [companies, setCompanies] = useState([])

  return (
    <>
      <header>
        <h1>Kompany</h1>
      </header>

      <main>
        <section id='search-bar'>
          <input />
          <button>Zoeken</button>
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
