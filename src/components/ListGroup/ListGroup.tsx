import { useState } from "react"
import styled from "styled-components";

const List = styled.ul`
list-style : none;
padding : 0;
`;

const ListItems = styled.li`
  padding : 5px 0;
`

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
    <List>
      {items.map( (item , index)=>
        <ListItems 
          key={item}
          //pass the function, dont call it
          // onClick={() => { setSelectedIndex(index)}}
          onClick={()=>{
            setSelectedIndex(index);
            onSelectItem(item);
          } }
        >
          {item}
        </ListItems> ) }
    </List>
    </>
  )
}

export default ListGroup