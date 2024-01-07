import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import {BsFillCalendarFill} from 'react-icons/bs'
import ListGroup from "./components/ListGroup";
import { useState } from "react";
import Like from "./components/Button/Like";

function App() {

  const items = ["new yprk" , "zass yprdan" , "nigeria asdfae"]

  const [showAlert, setAlert] = useState(false);

  return (
    <div>
      {showAlert && (
        <Alert onClose={() => setAlert(!showAlert)}>My alert</Alert>
      )}
      <Button color="primary" onClick={() => setAlert(!showAlert)}>
        My Button
      </Button>
      <div>
        <BsFillCalendarFill color="red" size={40}/>
      </div>
      <div>
        <Like/>
      </div>
    </div>
  );
}

export default App;
