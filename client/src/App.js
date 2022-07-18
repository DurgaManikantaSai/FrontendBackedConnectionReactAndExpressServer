import React from 'react'
import { useEffect,useState } from 'react'

const App = () => {

  const [backendData,setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then( 
      response => response.json()
    )
    .then(
      data => setBackendData(data)
    )
  },[])
  return (
    <div>
       <h1>Users</h1>
       {(typeof backendData.users === 'undefined') ? (
        <p>Loading...</p>
       ): (
        backendData.users.map((user,i) => (
          <p key={i}>{user}</p>
        ))
       )}
    </div>
  )
}

export default App