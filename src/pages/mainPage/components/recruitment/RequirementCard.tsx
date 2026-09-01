import type { Requirement } from "../../../../types/requirement"

type Props = {
  requirement: Requirement
}

const requirementIcons: Record<string, string> = import.meta.glob(
  "../../../../assets/icons/*",
  {
    eager: true,
    import: "default"
  }
)

export default function RequirementCard({ requirement }:Props) {
  const requirementIcon = requirementIcons[`../../../../assets/icons/${requirement.requirementIcon}`]

  return(
    <div className="requirement">
      <img src={requirementIcon} alt="" loading="lazy" decoding="async" aria-hidden="true" />
      <span>{requirement.requirementText}</span>
    </div>
  )
}