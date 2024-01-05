import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";


function App() {
  let items = [
    'New York',
    'Anadifja',
    'Sillicon Valleu',
    'Japan',
    'Londaon',
  ]

  const handleSelectItem = (item : string) => {
    console.log(item)
  }

  return (
  <div> 
    <ListGroup items={items} heading='Cities' onSelectItem={handleSelectItem}/> 

    <div>
      <Alert>
        Hello <span>World</span>
      </Alert>
    </div>
  </div>

  

  )
}

export default App;