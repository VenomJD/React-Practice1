import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import { Analytics } from '@vercel/analytics/react'
const root = createRoot(document.getElementById('app'))
root.render(<><App /><Analytics /></>)
