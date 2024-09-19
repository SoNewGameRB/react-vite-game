import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GuessNumberGame from './GuessNumberGame';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GuessNumberGame />
  </StrictMode>,
)
