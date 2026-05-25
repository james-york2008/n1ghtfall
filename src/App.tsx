import Navbar from './components/layout/Navbar'
import Hero from './components/hero/HeroSection'
import ScheduleSection from './components/schedule/ScheduleSection'
import RosterSection from './components/roster/RosterSection'
import RecruitmentSection from './components/recruitment/RecruitmentSection'
import Footer from './components/layout/Footer'


export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div id='sectionsContainer'>
        <ScheduleSection />
        <RosterSection />
        <RecruitmentSection />
      </div>
      <Footer />  
    </>
  )
}