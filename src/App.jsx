import './App.css';
import Header from './Components/Header';
import DestDisplay from './Components/DestDisplay';
import AddDest from './Components/AddDest';
import axios from 'axios'
import { useState } from 'react';

function App() {
  const [destinations, setDestinations] = useState([])

  
  return (
    <div className="App">
      <Header/>
      <main>
        <AddDest/>
        <DestDisplay/>
      </main>
    </div>
  );
}

export default App;
