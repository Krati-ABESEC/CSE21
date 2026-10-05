import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const[search, setSearch]= useState("");

  const documents= [
    {
      name: "FSD",
      file: "http://localhost:5000/Files/FSD– Node.pdf"
    },
    {
      name: "Version Control",
      file:"http://localhost:5000/Files/Git and Git Hub.pdf"
    },
    {
      name:"ME",
      file:"http://localhost:5000/Files/EV and HEV (2025-26)_PPT Slides content (notes).pdf"
    },
    {
      name:"Practice",
      file:"http://localhost:5000/Files/Iteration and Loop Questions.pdf"
    }
  ];
  
  return (
    <>
      <h1> Notes Portal App  </h1>
      <input type="text" placeholder='enter the notes heading' value={search} onChange={(e)=> setSearch(e.target.value)}/>

      {documents.filter((file)=>
        file.name.toLowerCase().includes(search.toLowerCase()))
        .map((file) =>(
          <div key={file.name}>
            <p> {file.name} </p>
            <a href={`${file.file}`} download> 
              <button> Download </button>
            </a>
          </div>
        ))
      }
      
    </>
  )
}

export default App
