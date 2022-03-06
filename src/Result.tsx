import './Result.css'

interface Company {
  name: string
  city: string
  zipCode: string
  streetName: string
  logo: string
}

function Result(props: { company: Company }) {
  return (
    <>
      <h2>{props.company.name}</h2>

      <address>{props.company.city}, {props.company.zipCode}, {props.company.streetName}</address>

      <img src={props.company.logo} alt={`Logo of ${props.company.name}`} width='60' height='60' />
    </>
  )
}

export default Result
