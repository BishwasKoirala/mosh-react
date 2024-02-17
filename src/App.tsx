import axios, { CanceledError } from "axios";
import React, { useEffect, useState } from "react";
import { number } from "zod";

interface User {
  id: number;
  name: string;
}

const App = () => {
  const [error, setError] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
        setLoading(false);
      })
      .catch((anError) => {
        if (anError instanceof CanceledError) return;
        setError(anError.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);

  const deleteUser = (user : User) => {
    const originalUsers = [...users]
    setUsers(users.filter( u => u.id !== user.id))

    axios.delete("https://jsonplaceholder.typicode.com/zusers/" + user.id)
      .catch(err => {
        setError(err.message)
        setUsers(originalUsers)
      })
  }
  return (
    <div>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <button className="btn btn-outline-danger" onClick={() =>deleteUser(user)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
