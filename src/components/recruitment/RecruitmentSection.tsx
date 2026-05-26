import SectionCard from "../ui/Section";
import { requirements } from '../../data/requirements'
import RequirementCard from "./RequirementCard";

export default function RecruitmentSection () {
  return(
    <SectionCard>
      <section className="requirements">
        <h3>WE ARE RECRUITING</h3>

        {requirements.map(requirement => (
          <RequirementCard key={requirement.id} requirement={requirement} />
        ))}

        <a href="https://forms.gle/8CCLypVxqjwUaahU9" className="ctaButton cutButton applyNow">APPLY NOW</a>
      </section>
    </SectionCard>
  )
}