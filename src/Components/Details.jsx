import React from 'react'
import { useParams, useLoaderData } from 'react-router-dom'
import axios from 'axios'

export const getDestinationDetails = async ({params}) => {
  const {id} = params
  const res = await axios.get(`http://localhost:4545/api/destination/${id}?apiKey=${process.env.REACT_APP_API_KEY}`)
  return res.data  
}

const Details = () => {
  // const {id} = useParams()
  // console.log(+id)

  const dest = useLoaderData()
  console.log(dest)
  return (
    <div className="dest-card-container">
            <h2>Destination: {dest.name}</h2>
            <img src={dest.imageURL} />
            <h3>International: {dest.international ? 'yes' : 'no'}</h3>
            <p>{dest.notes}</p>
            {/* <button onClick={() => deleteDestination(dest.id)}>Delete</button> */}
            {/* <button onClick={() => setEditing(true)}>Edit</button> */}
        </div>
  )
}

export default Details