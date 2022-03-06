import { useState, useEffect } from 'react'
import './Result.css'
import Details from './Details'

interface Company {
  id: string
  name: string
  city: string
  zipCode: string
  streetName: string
  logo: string
}

function Result(props: { company: Company }) {
  const [expanded, setExpanded] = useState(false)
  const [details, setDetails] = useState(null)

  useEffect(() => {
    if (expanded && details === null) {
      fetch(`https://617c09aad842cf001711c200.mockapi.io/v1/companies/${props.company.id}/details`)
        .then((response) => response.json())
        .then((json) => setDetails(json.data[0]))
        .catch((error) => alert(error))
    }
  }, [expanded])

  return (
    <article onClick={() => setExpanded(!expanded)} className={expanded ? 'expanded' : 'collapsed'}>
      <h2>{props.company.name}</h2>

      <address>{props.company.city}, {props.company.zipCode}, {props.company.streetName}</address>

      <img src={props.company.logo} alt={`Logo of ${props.company.name}`} width='60' height='60' />

      {details !== null && <Details details={details} />}
    </article>
  )
}

export default Result
