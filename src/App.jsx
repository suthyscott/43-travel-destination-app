import './App.css';
import Header from './Components/Header';
import DestDisplay from './Components/DestDisplay';
import AddDest from './Components/AddDest';
import Home from './Components/Home';
import Details from './Components/Details';
import axios from 'axios'
import { useState, useEffect } from 'react';
import {Routes, Route} from 'react-router-dom'

function App() {
  // const [destinations, setDestinations] = useState([])

  // const getAllDestinations = () => {
  //   axios.get(`http://localhost:4545/api/destinations?apiKey=${process.env.REACT_APP_API_KEY}`)
  //     .then(res => {
  //       console.log('axios request', res.data)
  //       setDestinations(res.data)
  //     })
  //     .catch(err => console.log(err))
  // }

  // useEffect(() => {
  //   // console.log('useEffect')
  //   getAllDestinations()
  // }, [])

  // const deleteDestination = (destId) => {
  //   axios.delete(`http://localhost:4545/api/destinations/${destId}?apiKey=${process.env.REACT_APP_API_KEY}`)
  //     .then(res => getAllDestinations())
  //     .catch(err => console.log(err))
  // }

  // const addDestination = (newDestObj) => {
  //   axios.post(`http://localhost:4545/api/destinations?apiKey=${process.env.REACT_APP_API_KEY}`, newDestObj)
  //     .then(res => getAllDestinations())
  //     .catch(err => console.log(err))
  // }

  // const editDestination = (destId, updatedObj) => {
  //   axios.put(`http://localhost:4545/api/destination/${destId}?apiKey=${process.env.REACT_APP_API_KEY}`, updatedObj)
  //     .then(res => getAllDestinations())
  //     .catch(err => console.log(err))
  // }
  
  // console.log("Component renders", destinations)
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route path='/details/:id' element={<Details/>}/>
        <Route path='/addDest' element={<AddDest/>}/>
      </Routes>

      {/* <main>
        <AddDest addDestination={addDestination}/>
        <DestDisplay destinations={destinations} deleteDestination={deleteDestination} editDestination={editDestination}/>
      </main> */}
    </div>
  );
}

export default App;
