import './App.css';
import Header from './Components/Header';
import DestDisplay from './Components/DestDisplay';
import AddDest from './Components/AddDest';
import axios from 'axios'
import { useState, useEffect } from 'react';

function App() {
  const [destinations, setDestinations] = useState([])

  const getAllDestinations = () => {
    axios.get(`http://localhost:4545/api/destinations?apiKey=${process.env.REACT_APP_API_KEY}`)
      .then(res => {
        console.log('axios request', res.data)
        setDestinations(res.data)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    // console.log('useEffect')
    getAllDestinations()
  }, [])

  const deleteDestination = (destId) => {
    axios.delete(`http://localhost:4545/api/destinations/${destId}?apiKey=${process.env.REACT_APP_API_KEY}`)
      .then(res => getAllDestinations())
      .catch(err => console.log(err))
  }

  const addDestination = (newDestObj) => {
    axios.post(`http://localhost:4545/api/destinations?apiKey=${process.env.REACT_APP_API_KEY}`, newDestObj)
      .then(res => getAllDestinations())
      .catch(err => console.log(err))
  }

  const editDestination = (destId, updatedObj) => {
    axios.put(`http://localhost:4545/api/destination/${destId}?apiKey=${process.env.REACT_APP_API_KEY}`, updatedObj)
      .then(res => getAllDestinations())
      .catch(err => console.log(err))
  }
  
  // console.log("Component renders", destinations)
  return (
    <div className="App">
      <Header/>
      <main>
        <AddDest addDestination={addDestination}/>
        <DestDisplay destinations={destinations} deleteDestination={deleteDestination} editDestination={editDestination}/>
      </main>
    </div>
  );
}

export default App;
