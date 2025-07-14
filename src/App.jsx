import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')

  return (
    <div className="app">
      <h1>Name Greeting App</h1>
      <div className="greeting-container">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="name-input"
        />
        {name && (
          <div className="greeting">
            Hello {name}!
          </div>
        )}
      </div>
    </div>
  )
}

export default App
