import SectionCard from "../ui/Section";
import { events } from '../../data/events'
import Event from "./EventCard";

export default function ScheduleSection () {
  return(
    <SectionCard>
    <h3>UPCOMING SCHEDULE</h3>
    
    {events.map(event => (
      <Event key={event.id} event={event} />
    ))}
    </SectionCard>
  )
}