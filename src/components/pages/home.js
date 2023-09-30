import { useEffect, useState } from "react";
import axios from 'axios'
import { MagnifyingGlass } from "react-loader-spinner";

function Home() {

  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => setUsers(res.data))
      .catch((error) => setError(error.message))
  }, []
  )
  console.log(error);
  
  return (
    <>
      <div class="grid divide-x-2 text-center">
        {users.map(user => (
          <div key={user.name}>
            <p>{user.name}</p>
            <p>{user.address}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;