import { useState, useEffect } from 'react';
import './App.css'
import axios from 'axios'

function App() {
  const [excuse, setExcuse] = useState("");

  const fetchExcuse = async (type: string) => {
    const { data: [{ excuse }] } = await axios.get(`https://excuser.herokuapp.com/v1/excuse/${type}/`);
    setExcuse(excuse)
  }


  return (
    <div className="App">
      <h1>Generate An Excuse</h1>
      <div>
        <button onClick={() => fetchExcuse('party')}>Party</button>
        <button onClick={() => fetchExcuse('family')}>Family</button>
        <button onClick={() => fetchExcuse('office')}>Office</button>
      </div>
      <div>
        {excuse}
      </div>
    </div>
  )
}

export default App
