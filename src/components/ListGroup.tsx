
function ListGroup() {

  let items = [
    'New Yord',
    'Anadifja',
    'Sillicon Valleu',
    'Japan',
    'Londaon',
  ]

  // items = []

  const handleClick  = (event : MouseEvent) => console.log(event)
  

  const message = items.length === 0 ? 
  <p>Not items found</p> : null
  return (
  <>
  <h1>List</h1>
  {items.length === 0 &&
    <p>No Items Found</p> }
  <ul className="list-group">
    { items.map( (item , index)=>
      <li 
        className="list-group-item" 
        key={item}
        onClick={handleClick}
      >
        {item}
      </li> ) }
  </ul>
  </>
  )
}

export default ListGroup