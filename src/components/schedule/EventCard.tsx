import clock from "../../assets/icons/clock.png"
import type { Event as EventType } from "../../types/event"

type Props = {
  event: EventType
}

export default function Event({ event }:Props) {
  return(
    <article className="event">
      <p className="eventDate"><span className="dateDay">{event.dateDay}</span><br />{event.dateMonth}</p>
      <div className="eventLabelContainer">
        <h4 className="eventLabel">{event.eventLabel}</h4>
        <p>{event.eventDetails}</p>
      </div>

      <div className="eventTime">
        <img src={clock} alt="" loading="lazy" />
        <p>{event.eventTime}<br />{event.eventTimezone}</p>
      </div>

      <p className="eventType">{event.eventType}</p>
    </article>
  )
}
