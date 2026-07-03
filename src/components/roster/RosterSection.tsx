import SectionCard from "../ui/Section"
import { players } from "../../data/roster"
import Player from "./PlayerCard"

export default function RosterSection () {
  return (
    <SectionCard>
      <section className="roster">
        <h3 id="roster">ACTIVE ROSTER</h3>

        {players.map(player => (
          <Player key={player.id} player={player} />
        ))}
      </section>
    </SectionCard>
  )
}