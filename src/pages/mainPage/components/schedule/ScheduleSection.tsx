import SectionCard from "../../../../components/ui/Section";
import { events } from "../../../../data/events"
import Event from "./EventCard";

export default function ScheduleSection () {
  return(
    <SectionCard>
      <section className="schedule">
        <h3 id="schedule">UPCOMING SCHEDULE</h3>
      
        {events.map(event => (
          <Event key={event.id} event={event} />
        ))}
      </section>
    </SectionCard>
  )
}