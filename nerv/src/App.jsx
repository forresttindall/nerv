
import logo from '/images/dot-triangle.png';

function App() {
  return (
    <div className="app-container">
      <div className="card">
        <header className="card-header">
          <img src={logo} alt="NERV Stack Logo" className="logo" />
          <h1 className="title">NERV Stack</h1>
          <p className="subtitle">Vite + Express + React + Node</p>
        </header>

        <main className="card-body">
          <p className="description">
            A fast, fullstack, serverless solution for modern web applications.
            Designed for rapid development and scalable deployment.
          </p>
        </main>

        <footer className="card-footer">
          <p className="built-by">
            Built by{' '}
            <a href="https://creationbase.io" target="_blank" rel="noopener noreferrer" className="creationbase-link">
              Creationbase
            </a>{' '}
            &copy; {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;