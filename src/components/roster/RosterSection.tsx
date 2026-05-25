import SectionCard from "../ui/Section"
import { players } from '../../data/roster'
import Player from './PlayerCard'

export default function RosterSection () {
  return (
    <SectionCard>
      <section id="roster">
        <h3>ACTIVE ROSTER</h3>

        {players.map(player => (
          <Player key={player.id} player={player} />
        ))}
      </section>
    </SectionCard>
  )
}