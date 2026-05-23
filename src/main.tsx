import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './css/variables.css'
import './css/global.css'
import './css/components/navbar.css'
import './css/components/hero.css'
import './css/components/sectionCard.css'
import './css/components/scheduleSection.css'
import './css/components/rosterSection.css'

import './css/components/footer.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
