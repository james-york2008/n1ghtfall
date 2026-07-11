import fallbackImage from "../../assets/fallbackImage.png"
import type { Player } from "../../types/player"
import RenderCharacters from "./RenderCharacters"

type Props = {
  player: Player
}

const playerAvatars: Record<string, string> = import.meta.glob(
  "../../assets/playerAvatars/*",
  {
    eager: true,
    import: "default"
  }
)


export default function Player({ player }:Props) {
  const playerAvatar = playerAvatars[`../../assets/playerAvatars/${player.avatarLink}`] ?? fallbackImage

  return (
    <article className="player">
      <div className="playerNameAndAvatar">
        <img src={playerAvatar} alt={`${player.name}'s avatar`} className="playerAvatar" loading="lazy" decoding="async" />
        <h4>{player.name}</h4>
      </div>

      <p className="playerRole">{player.role}</p>

      <div className="mainCharacters" id="preferredCharacters">
        <RenderCharacters player={player} />
      </div>
    </article>
  )
}