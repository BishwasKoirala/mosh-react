import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => console.log(res.data) )
  });
  return <div>App</div>;
};

export default App;
