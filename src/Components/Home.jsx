import { useLoaderData } from "react-router-dom"
import axios from "axios"
import DestDisplay from "./DestDisplay"
import { useState } from "react"

export const getAllDestinations = async () => {
  const res = await axios.get(`http://localhost:4545/api/destinations?apiKey=${process.env.REACT_APP_API_KEY}`)
  return res.data  
}

const Home = () => {
  const [destinations, setDestinations] = useState(useLoaderData())

  console.log(destinations)
  
  return (
    <div>
      <DestDisplay destinations={destinations}/>
    </div>
  )
}

export default Home