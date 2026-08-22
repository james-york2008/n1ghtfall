import heroImage from "../../assets/heroImage.webp"
import ScreenReaderText from "../ui/ScreenReaderText"

export default function Hero () {
  return  (
    <section className="hero" aria-label="Welcome to Nightfall" style={{
      backgroundImage: `url(${heroImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      <h2>WE COMPETE.<br />WE <span className="textAccent">ELEVATE.</span></h2>
      
      <p>
        <ScreenReaderText>Nightfall</ScreenReaderText> 

        <span aria-hidden="true">N1ghtfall </span>
        is a competitive Strinova Mobile union built for players who strive for excellence, teamwork, discipline, and progress.<br />This is our standard.
      </p>

      <div className="heroButtonsWrapper">
        <a className="cutButton heroButtons ctaButton viewRosterButton" href="#roster">VIEW ROSTER</a>
        <a className="cutButton heroButtons ourSchedule" href="#schedule">OUR SCHEDULE</a>
      </div>
    </section>
  )
}