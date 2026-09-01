import fallbackImage from "../../../../assets/fallbackImage.webp" 
import type { Player } from "../../../../types/player"

type Props = {
  player: Player
}

const characterAvatars: Record<string, string> = import.meta.glob(
  "../../../../assets/characterAvatars/*",
  {
    eager: true,
    import: "default",
  }
)

export default function RenderCharacters({ player }:Props) {
  return(
    <div>
      {player.preferredCharacters.map((character) => {
        const characterAvatar = characterAvatars[`../../../../assets/characterAvatars/${character.characterImageLink}`] ?? fallbackImage
        
        return(
          <a href={`https://strinova.org/wiki/${character.name}`} target="_blank" rel="noopener noreferrer" key={character.id}><img src={characterAvatar} alt={character.altText} className="characterAvatars" loading="lazy" decoding="async" /></a>
        )
      })}
    </div>
  )
}