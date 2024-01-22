import { useState } from "react";
import Message from "./components/Message";

export default function App () {
  // const [firstName , setFirstName] = useState('');
  // const [lastName , setLastName] = useState('');
  const [customer , setCustomer] = useState(
    {
      name : 'John' , 
      address : {
        city : 'Yokohama' ,
        zip : 2440805
      }
    }
  )

  const handleClick = () => {
    setCustomer({
      // ..means all existing objects

      ...customer,
      address : {
        ...customer.address,
        zip : 21111
      }
    })
  }

  return (
    <div>
      <button onClick={handleClick} >click</button>
      <p>{customer.name}</p>  
    </div>
  );
}
