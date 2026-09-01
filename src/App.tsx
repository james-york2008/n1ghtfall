import MainPage from "./pages/mainPage/MainPage"

import { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {
  useEffect(() => {
    if (window.location.hash) {
      const navigationElement: HTMLElement | null =                 document.querySelector(window.location.hash)
    
      if (navigationElement) {
        const timer = setTimeout(() => {
          navigationElement.scrollIntoView()

          navigationElement.setAttribute('tabindex', '-1')
          navigationElement.focus()
          navigationElement.removeAttribute('tabindex')  
        }, 100)
        return () => clearTimeout(timer)
      }
    }
  }, [])


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/N1ghtfall" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
        
    </>
  )
}