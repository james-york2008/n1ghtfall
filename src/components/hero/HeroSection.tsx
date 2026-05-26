import heroImage from '../../assets/heroImage.png'

export default function Hero () {
  return  (
    <section className='hero' style={{
      backgroundImage: `url(${heroImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <h2>WE COMPETE.<br />WE <span className='textAccent'>ELEVATE.</span></h2>
      <p>N1ghtfall is a competitive Strinova Mobile union built for players who strive for excellence, teamwork, discipline, and progress.<br />This is our standard.</p>

      <div className='heroButtonsWrapper'>
        <a className='cutButton heroButtons ctaButton viewRosterButton' href='#roster'>VIEW ROSTER</a>
        <a className='cutButton heroButtons ourSchedule' href='#schedule'>OUR SCHEDULE</a>
      </div>
    </section>
  )
}