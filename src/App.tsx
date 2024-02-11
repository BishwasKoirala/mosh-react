import axios from "axios";
import React, { useEffect, useState } from "react";
import { number } from "zod";

interface User {
  id: number;
  name: string;
}

const App = () => {
  const [error, setError] = useState("");

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      // give a callback function in catch to catch error
      .catch((anError) => setError(anError.message));
  }, []);
  return (
    <div>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
