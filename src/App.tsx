import ListGroup from "./components/ListGroup";


function App() {
  let items = [
    'New Yord',
    'Anadifja',
    'Sillicon Valleu',
    'Japan',
    'Londaon',
  ]

  return (
  <div> 
    <ListGroup items={items} heading='Cities'/> 
  </div>
  )
}

export default App;