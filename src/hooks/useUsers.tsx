import { CanceledError } from "axios";
import { useState, useEffect } from "react";
import userService, { User } from "../services/user-servive";

const useUsers = () => {
  const [error, setError] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const { request, cancel } = userService.getAll<User>();
    request
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
    return () => cancel();
  }, []);

  return {users , error , isLoading , setUsers , setError}
};

export default useUsers;
