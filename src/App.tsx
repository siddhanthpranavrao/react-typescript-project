import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Contact from './pages/Contact'
import { useState } from 'react'

function App() {
  const [username, setUsername] = useState('Siddhanth');

  const updateUsername = (newUsername: string) => {
    setUsername(newUsername);
  }


  return (
    <div className="App">
      <Router>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/profile'>Profile</Link>
          <Link to='/contact'>Contact</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home username={username}/>} />
          <Route path='/profile' element={<Profile username={username} updateUsername={updateUsername}/>} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<h1>ERROR!</h1>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
