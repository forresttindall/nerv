import { useState, useEffect } from 'react'

function App() {
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/status')
      .then(res => res.json())
      .then(data => {
        setStatus(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('API Error:', err)
        setStatus({ message: 'Welcome to VERN Stack!', status: 'offline' })
        setLoading(false)
      })
  }, [])

  return (
    <div className="app">
      <header className="app-header">
        <h1>🚀 VERN Stack</h1>
        <p>Vite + Express + React + Node</p>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <p className="message">{status.message}</p>
            <div className="status-badge">
              Status: <span className={`status ${status.status}`}>{status.status}</span>
            </div>
            {status.timestamp && (
              <p className="timestamp">Last updated: {new Date(status.timestamp).toLocaleString()}</p>
            )}
          </div>
        )}
      </header>
    </div>
  )
}

export default App