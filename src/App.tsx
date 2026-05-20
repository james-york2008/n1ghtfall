import Navbar from './components/layout/Navbar'
import Hero from './components/hero/HeroSection'
import ScheduleSection from './components/schedule/ScheduleSection'


export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div id='sectionsContainer'>
        <ScheduleSection />
      </div>
    </>
  )
}