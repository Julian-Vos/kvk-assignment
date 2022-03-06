interface Details {
  catchPhrase: string
  website: string
  phoneNumber: string
}

function Details(props: { details: Details }) {
  return (
    <>
      <span>{props.details.catchPhrase}</span>
      <a onClick={(event) => event.stopPropagation()} href={props.details.website}>{props.details.website}</a>
      <a onClick={(event) => event.stopPropagation()} href={`tel:${props.details.phoneNumber}`}>Call 📞</a>
    </>
  )
}

export default Details
