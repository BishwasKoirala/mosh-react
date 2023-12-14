import { useState } from "react"

function ListGroup() {


  //This is called react Hooks
  const [selectedIndex , setSelectedIndex] =  useState(-1)
  // first value is variable
  // second value is updaterfunction
  let items = [
    'New Yord',
    'Anadifja',
    'Sillicon Valleu',
    'Japan',
    'Londaon',
  ]

  return (
    <>
    <h1>List</h1>
    {items.length === 0 &&
      <p>No Items Found</p> }
    <ul className="list-group">
      { items.map( (item , index)=>
        <li 
          className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item' } 
          key={item}
          //pass the function, dont call it
          // onClick={() => { setSelectedIndex(index)}}
          onClick={()=>setSelectedIndex(index) }
        >
          {item}
        </li> ) }
    </ul>
    </>
  )
}

export default ListGroup