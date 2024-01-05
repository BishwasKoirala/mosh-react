import { useState } from "react"

interface Props {
  items : string[];
  heading : string;
  onSelectItem : (item : string) => void
}

function ListGroup({items , heading , onSelectItem} : Props) {
  
  //This is called react Hooks
  const [selectedIndex , setSelectedIndex] =  useState(-1)
  // first value is variable
  // second value is updaterfunction


  return (
    <>
    <h1>{heading}</h1>
    {items.length === 0 &&
      <p>No Items Found</p> }
    <ul className="list-group">
      {items.map( (item , index)=>
        <li 
          className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item' } 
          key={item}
          //pass the function, dont call it
          // onClick={() => { setSelectedIndex(index)}}
          onClick={()=>{
            setSelectedIndex(index);
            onSelectItem(item);
          } }
        >
          {item}
        </li> ) }
    </ul>
    </>
  )
}

export default ListGroup