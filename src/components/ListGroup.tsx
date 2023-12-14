
function ListGroup() {

  let items = [
    'New Yord',
    'Anadifja',
    'Sillicon Valleu',
    'Japan',
    'Londaon',
  ]

  items = []

  const message = items.length === 0 ? 
  <p>Not items found</p> : null


  const getmessage = () => {
    return items.length === 0 ?
      <p>No items Found</p>
      : null //else null
  }

  return (
  <>
  <h1>List</h1>
  { getmessage }
  <ul className="list-group">
    { items.map( item =>
      <li key={item}>{item}</li> ) }
  </ul>
  </>
  )
}

export default ListGroup