import React, { useState, useEffect } from "react";

// importing component(s)
import TableRow from "./components/TableRow";

import axios from "axios";


function App() {
  const [state, setState] = useState([]);
  // axios.get("http://localhost:4000/getdata").then(response => console.log(response.data));

  useEffect(() => {
     const fetchData = async () => {
      const result = await axios.get("https://fetch-jsonplaceholder-api-user.onrender.com/getdata");
      setState( () => result.data);
    }
  
    fetchData();  
  }, [])
  

  


  return (
    <div className="App container-fluid bg-light p-5">
    <h1 className="text-center text-success">Data fetched using the api I created, that fetches data from json-placeholder-api</h1>
       <table>
       <thead>
       <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Website</th>
        </tr>   
       </thead>
       <tbody>
        {state.map(user => {
          return <TableRow 
          key={user.id}
          id={user.id} 
          name={user.name}  
          username = {user.username}
          email = {user.email}
          address = {`${user.address.street}, ${user.address.suite}, ${user.address.city} `}
          phone = {user.phone}
          website = {user.website}
          /> 
        })}
       </tbody>
      </table>
    </div>
  );
}

export default App;
