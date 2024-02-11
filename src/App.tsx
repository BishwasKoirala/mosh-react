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

  useEffect(() => {
    const controller = new AbortController();

    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((anError) => {
        if (anError instanceof CanceledError) return;
        setError(anError.message);
      });

    return () => controller.abort();
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
