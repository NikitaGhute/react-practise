import { useState } from 'react'
import Header from './components/Header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="App">
      <Header />
      <main style={{ padding: '2rem' }}>
        <h1>Welcome to the Website</h1>
        <p>This is the main content area below the header.</p>
      </main>
    </div>
    </>
  )
}

export default Header
