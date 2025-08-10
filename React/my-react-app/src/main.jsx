import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import App2 from './App2.jsx'
import App3 from "./App3.jsx"
import App4 from "./App4"
import App5 from "./App5.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>Intro & JSX</h1>
    <App />
    <h1>Props</h1>
    <App2 />
    <h1>States</h1>
    <App3/>
    <h1>Inputs</h1>
    <App4/>
    <h1>DataFlow</h1>
    <App5/>
  </StrictMode>,
)
