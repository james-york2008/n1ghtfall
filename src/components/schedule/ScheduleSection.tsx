import SectionCard from "../ui/Section";
import clock from '../../assets/icons/clock.png'

export default function ScheduleSection () {
  return(
    <SectionCard>
    <h3>UPCOMING SCHEDULE</h3>
    <article className="event">
      <p className="eventDate"><span className="dateDay">24</span><br />MAY</p>
      <div className="eventLabelContainer">
        <h4 className="eventLabel">SCRIM NIGHT</h4>
        <p>vs Nova Regiment</p>
      </div>

      <div className="eventTime">
        <img src={clock}  alt=""/>
        <p>8:00 PM<br />EST</p>
      </div>

      <p className="eventType">SCRIM</p>
    </article>

    <article className="event">
      <p className="eventDate"><span className="dateDay">26</span><br />MAY</p>
      <div className="eventLabelContainer">
        <h4 className="eventLabel">PRACTICE NIGHT</h4>
        <p>Internal Practice</p>
      </div>

      <div className="eventTime">
        <img src={clock}  alt=""/>
        <p>8:00 PM<br />EST</p>
      </div>

      <p className="eventType">PRACTICE</p>
    </article>

      <article className="event">
        <p className="eventDate"><span className="dateDay">29</span><br />MAY</p>
        <div className="eventLabelContainer">
          <h4 className="eventLabel">TOURNAMENT</h4>
          <p>Starlight Clash Qualifiers</p>
        </div>

        <div className="eventTime">
          <img src={clock}  alt=""/>
          <p>7:00 PM<br />EST</p>
        </div>

        <p className="eventType">TOURNAMENT</p>
      </article>
    </SectionCard>
  )
}