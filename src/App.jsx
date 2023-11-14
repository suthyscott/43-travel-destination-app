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
    console.log('useEffect')
    getAllDestinations()
  }, [])
  // getAllDestinations()
  
  console.log("Component renders", destinations)
  return (
    <div className="App">
      <Header/>
      <main>
        <AddDest/>
        <DestDisplay destinations={destinations}/>
      </main>
    </div>
  );
}

export default App;
