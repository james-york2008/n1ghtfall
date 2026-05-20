import logo from '../../assets/logo.png'
import discordIcon from '../../assets/icons/discord.png'

export default function Navbar() {
  return (
    <>
      <nav id='navbar'>
        <img src={logo} id='logo' alt=''/>
        <div id='title'>
          <h1>N1ghtfall</h1>
          <p>STRINOVA COMPETITIVE UNION</p>
        </div>

        <a href='https://discord.gg/rQNh4gKG2p' id='discordButton' className='cutButton CtaButton'><img src={discordIcon}  alt=''/>JOIN DISCORD</a>
      </nav>
    </>
  )
}