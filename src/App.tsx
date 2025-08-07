import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home'
import Chip from '@mui/material/Chip'
import ConstructionIcon from '@mui/icons-material/Construction';

function App() {
  return (
    <>
      <div>
      <Chip
        label="Docker Local Development + CICD"
        color="info"
        icon={<ConstructionIcon />}
        sx={{ fontSize: '1.25rem', fontWeight: 'bold', px: 2, py: 1 }}
      />
    </div>
      <div>
        <Home />
      </div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
    </>
  )
}

export default App
