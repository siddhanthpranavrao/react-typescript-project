import { useState, useEffect } from 'react';
import './App.css'
import axios from 'axios'

function App() {
  const [catData, setCatData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: { fact } } = await axios.get('https://catfact.ninja/fact');
        setCatData(fact);
      } catch (error) {
        console.error('Error fetching cat data:', error);
      }
    };

    fetchData();
  }, []);

  const fetchCatData = async () => {
  }

  return (
    <div className="App">
      <button >Generate Cat Fact</button>
      <div>
        {catData}
      </div>
    </div>
  )
}

export default App
