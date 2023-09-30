import { useEffect, useState } from "react";
import axios from 'axios'
import { MagnifyingGlass } from "react-loader-spinner";

function Home() {

  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
          setUsers(res.data)
      })
      .catch((error) => setError(error.message))
  }, []
  )
  console.log("error"+error.message);

  return (
    <>
    {
      users.length > 0
        ? <div className="flex justify-center">
          <div class="grid grid-cols-3 divide-x w-11/12">
            {users.map(user => (
              <div className="my-1.5" key={user.name}>
                <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{user.name}</h5>
                  <p class="font-normal text-gray-700 dark:text-gray-400">{user.username}</p>
                  <p class="font-normal text-gray-700 dark:text-gray-400">{user.email}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
        :   
        <div>
            {
              users.length == 0
              ? <div>
                  <MagnifyingGlass />
                  <h2 className="mb-4 leading-none tracking-tight text-red-900 md:text-5xl lg:text-6xl">User not found..</h2>
                </div>
              : <MagnifyingGlass />
            }
        </div> 
        
    }
    </>
  );
}

export default Home;
