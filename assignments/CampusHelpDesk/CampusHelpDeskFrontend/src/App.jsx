import { useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [requests, setRequest] = useState([]);
  const [S_name, setName]= useState("");
  const [email, setEmail]= useState("");
  const [category, setCategory]= useState("");
  const [problem, setProblem]= useState("");
  const [priority, setPriority]= useState("");


  const getrequest= async()=>{
    const data= await fetch("http://localhost:5000/api/requests");
    const response= await data.json();
    setRequest(response);
  }

  useEffect(()=>{
    getrequest();
  }, []);

  const UpdateRequest= async(id)=>{
    const request= {
      S_Name: S_name,
      email: email,
      category: category,
      Problem: problem,
      Priority: priority
    };


    await fetch(`http://localhost:5000/api/requests/${id}`, 
      {
        method: "PUT",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify(request)
      }
    );

    getrequest();
  }

  const addrequest= async(e)=>{
    e.preventDefault();

    const request= {
      S_Name: S_name,
      email: email,
      category: category,
      Problem: problem,
      Priority: priority
    }
    await fetch(`http://localhost:5000/api/requests`,
      {
        method: "POST",
        header: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify(request)
      }

    );

    setName("");
    setEmail("");
    setCategory("");
    setProblem("");
    setPriority("");

    getrequest();
  }

  const delRequest= async(id)=>{
    await fetch( `http://localhost:5000/api/requests/${id}`,
      {method:"DELETE"}
    );

    getrequest();
  }


  return (
    <>
      <h1> CAMPUS HELP DESK </h1>
      <form onSubmit={addrequest}>
        <label> Student Name: </label>
        <input type="text" placeholder='enter your name' required value={S_name} onChange={(e)=> setName(e.target.value)}/><br></br>
        <label> Email Address: </label>
        <input type="text" placeholder='enter your email' required value={email} onChange={(e)=> setEmail(e.target.value)}/><br></br>
        <label> Category: </label>
        <input type="text" placeholder='enter your category' required value={category} onChange={(e)=> setCategory(e.target.value)}/><br></br>
        <label> Problem Statement: </label>
        <input type="text" placeholder='enter your problem statement' required value={problem} onChange={(e)=> setProblem(e.target.value)}/><br></br>
        <label> Priority: </label>
        <select> 
          <option> High </option>
          <option> Medium </option>
          <option> Low </option>
        </select><br></br>
        <button type="submit"> Submit Request </button>
      </form>

      <table border="2" cellpadding={20}>
        <thead>
          <th>S_ID</th>
          <th>S_Name</th>
          <th>S_Email</th>
          <th>Category</th>
          <th>Problem</th>
          <th>Priority</th>
          <th> Action </th>
        </thead>

        <tbody>
          {requests.map((request)=>(
            <tr key={request.id}>
              <td>{request.id}</td>
              <td>{request.S_Name}</td>
              <td>{request.email}</td>
              <td>{request.category}</td>
              <td>{request.Problem}</td>
              <td>{request.Priority}</td>
              <td>
                <button onClick={()=> UpdateRequest(request.id)}>Update</button>
                <button onClick={()=> delRequest(request.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </>
  )
}

export default App
