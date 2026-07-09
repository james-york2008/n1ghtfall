import logo from "../../assets/logo.png"
import discordIcon from "../../assets/icons/discord.png"

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <img src={logo} className="logo" alt="Nightfall logo"/>
        <div className="title">
          <h1>N1ghtfall</h1>
          
          <span className="screenReaderText">Nightfall</span>
          <p>STRINOVA COMPETITIVE UNION</p>
        </div>

        <a href="https://discord.gg/rQNh4gKG2p" className="cutButton ctaButton discordButton" target="_blank" rel="noopener noreferrer"><img src={discordIcon} alt="" aria-hidden="true" />JOIN DISCORD</a>
      </nav>
    </>
  )
}