import type { Player } from '../../types/player'

type Props = {
  player: Player
}

const characterAvatars: Record<string, string> = import.meta.glob(
  '../../assets/characterAvatars/*',
  {
    eager: true,
    import: 'default',
  }
)

const playerAvatars: Record<string, string> = import.meta.glob(
  '../../assets/playerAvatars/*',
  {
    eager: true,
    import: 'default'
  }
)


export default function Player({ player }:Props) {
  const playerAvatar = playerAvatars[`../../assets/playerAvatars/${player.avatarLink}`]
  const firstCharacterAvatarPath = characterAvatars[`../../assets/characterAvatars/${player.characterAvatarOneLink}`]
  const secondCharacterAvatarPath = characterAvatars[`../../assets/characterAvatars/${player.characterAvatarTwoLink}`]

  return (
    <article className='player'>
      <div className='playerNameAndAvatar'>
        <img src={playerAvatar} alt='' className='playerAvatar' loading='lazy' />
        <h4>{player.name}</h4>
      </div>

      <p className='playerRole'>{player.role}</p>

      <div className='mainCharacters'>
        <a href='https://strinova.org/wiki/Characters'><img src={firstCharacterAvatarPath} alt={player.characterAvatarOneAlt} className='characterAvatars' /></a>
        
        <a href='https://strinova.org/wiki/Characters'><img src={secondCharacterAvatarPath} alt={player.characterAvatarTwoAlt} className='characterAvatars' /></a>
      </div>
    </article>
  )
}