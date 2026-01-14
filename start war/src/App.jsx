import { useState,useEffect }  from 'react' 
import axios from "axios"   
import './App.css'
import Home from './pages/home'
function App() {
 const [films,setFilms]=useState([]);
 const [loading,setLoading]=useState(true)
 const [error,setError]=useState(null)

useEffect(()=>{
  axios.get('https://swapi.info/api/films')
  .then(response=>{
    setFilms(response.data)
    setLoading(false)
  })
  .catch(error=>{
    setError(error)
    setLoading(false)
  })
},[]);
  return (
    
    <>
   {console.log(films)} 
  <h1>star war films webside</h1>
  <div>
 {loading ?(
  <h1>loading ....</h1>
 ) : error ? <h1> error:{error.message}</h1>:(

  <ul>
    <table  style={{borderColor:'2px solid red', margin:'10px'}}>
          <thead>
            <tr style={{backgroundColor:'blue'}}>
              <td>title</td>
              <td>created</td>
              <td>Episode_id</td>
              <td>release_date</td>
            </tr>
          </thead>
          <tbody>
            
    {films.map(film=>(
      <tr key={film.id}>
        {/* <h2>{film.title}</h2>
        <h2>{film.created}</h2>
         <h2>{film.episode_id}</h2>
        <p>{film.release_date}</p> */}
        
              <td>{film.title}</td>
                   <td>{film.created}</td>
                        <td>{film.episode_id}</td>
                             <td>{film.release_date}</td>
          </tr>
      
     )) }
       
          </tbody>
        </table>
  </ul>
 )

 }
  </div>
    </>
  )
}

export default App
