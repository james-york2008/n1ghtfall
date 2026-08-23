import Navbar from "./components/layout/Navbar"
import Hero from "./components/hero/HeroSection"
import ScheduleSection from "./components/schedule/ScheduleSection"
import RosterSection from "./components/roster/RosterSection"
import RecruitmentSection from "./components/recruitment/RecruitmentSection"
import Footer from "./components/layout/Footer"

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
          <Route path="/N1ghtfall" element={
            <>
              <Navbar />
              
              <main>
                <Hero />

                <div className="sectionBreak" />
                  
                <div className="sectionsContainer">
                  <ScheduleSection />
                  <RosterSection />
                  <RecruitmentSection />
                </div>
              </main>
              
              <Footer />        
            </>
          } />
        </Routes>
      </BrowserRouter>
        
    </>
  )
}